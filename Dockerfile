# ==============================================================================
# Dockerfile - Yhanko Educa (School Landing Frontend)
# Multi-stage, performático, seguro e minimalista (Vite + React + Nginx Unprivileged)
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. Base Stage: Node.js runtime oficial minimalista (Alpine Linux)
# ------------------------------------------------------------------------------
FROM node:22-alpine AS base

WORKDIR /app

# ------------------------------------------------------------------------------
# 2. Dependencies Stage: Instalação rápida das dependências com cache eficiente
# ------------------------------------------------------------------------------
FROM base AS deps

# Copia apenas os manifestos primeiro para aproveitar o cache de camadas do Docker
COPY package.json package-lock.json ./

# Instala dependências de forma limpa, segura e reprodutível
RUN --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline --no-audit

# ------------------------------------------------------------------------------
# 3. Builder Stage: Compilação dos assets estáticos via Vite
# ------------------------------------------------------------------------------
FROM base AS builder

WORKDIR /app

# Copia os módulos instalados no estágio anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia todo o código-fonte da aplicação
COPY . .

# Argumentos de Build para variáveis de ambiente públicas do Vite (VITE_*)
ARG VITE_SCHOOL_API_URL=https://school-api-production-a1c6.up.railway.app
ENV VITE_SCHOOL_API_URL=$VITE_SCHOOL_API_URL

# Executa a compilação do TypeScript e bundling do Vite para produção
RUN npm run build && \
    echo "$VITE_SCHOOL_API_URL" > /app/dist/.built_api_url

# ------------------------------------------------------------------------------
# 4. Runner Stage: Servidor Web Nginx seguro e sem privilégios (Non-Root)
# ------------------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:alpine-slim AS runner

# Metadados OCI da imagem
LABEL maintainer="Yhanko Tech" \
      project="school-landing" \
      description="Yhanko Educa School Landing Page - Frontend de Alta Performance"

USER root

# Instala curl e wget para assegurar compatibilidade total com healthchecks do Docker e Coolify
RUN apk add --no-cache curl wget

# Copia a configuração endurecida e customizada do Nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos compilados do estágio builder para o diretório raiz do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia os scripts de inicialização e verificação de integridade (healthcheck)
COPY docker-entrypoint.sh /docker-entrypoint.sh
COPY docker-healthcheck.sh /docker-healthcheck.sh

# Normaliza quebras de linha CRLF (compatibilidade Windows/Linux), permissões e propriedade para UID 101 (nginx)
RUN sed -i 's/\r$//' /docker-entrypoint.sh /docker-healthcheck.sh && \
    chmod +x /docker-entrypoint.sh /docker-healthcheck.sh && \
    chown -R 101:101 /usr/share/nginx/html /etc/nginx/conf.d /docker-entrypoint.sh /docker-healthcheck.sh

# Retorna estritamente para o usuário não-privilegiado (UID 101)
USER 101

# Portas padrão de escuta não-privilegiada (e suporte a 3000/80 configuradas no Coolify)
EXPOSE 8080 3000 80

# Verificação contínua de saúde da aplicação compatível com portas dinâmicas
HEALTHCHECK --interval=20s --timeout=5s --start-period=5s --retries=3 \
  CMD /docker-healthcheck.sh

# Entrypoint dinâmico para injeção de variáveis de ambiente e ajuste de porta
ENTRYPOINT ["/docker-entrypoint.sh"]

# Inicializa o Nginx em foreground (executando como usuário não-root UID 101 'nginx')
CMD ["nginx", "-g", "daemon off;"]
