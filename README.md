# 🎓 School Landing (Yhanko Educa)

Landing Page institucional e de conversão do ecossistema **Yhanko Educa**, desenvolvida com **React 19**, **TypeScript**, **Vite 8** e **TailwindCSS 3**.

---

## 🚀 Execução em Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Compilar para produção localmente
npm run build
```

---

## 🐳 Execução com Docker (Produção)

A imagem Docker foi concebida com arquitetura **Multi-Stage Build**, servidor web **Nginx Unprivileged**, non-root user (UID 101), compressão gzip, cache estático imutável e cabeçalhos de segurança HTTP.

### 1. Usando Docker Compose (Recomendado)

```bash
# Iniciar o container
docker compose up -d --build

# Verificar logs
docker compose logs -f

# Parar o container
docker compose down
```

A landing page estará acessível em: `http://localhost:3001` (ou na porta configurada via variável `PORT`).

### 2. Usando Docker CLI diretamente

```bash
# Build da imagem
docker build -t school-landing:latest .

# Build customizando a URL da API backend
docker build \
  --build-arg VITE_SCHOOL_API_URL=https://school-api-production-a1c6.up.railway.app \
  -t school-landing:latest .

# Executar o container
docker run -d \
  --name school-landing \
  -p 3001:8080 \
  --restart unless-stopped \
  school-landing:latest
```

---

## 🛡️ Destaques de Arquitetura e Segurança

- **Multi-Stage Build**: Apenas os assets estáticos gerados pelo Vite são transferidos para a imagem final (`dist/`).
- **Nginx Unprivileged**: Execução segura sem privilégios de root (UID 101 `nginx`).
- **Tamanho Ultraleve**: O container final utiliza menos de **9 MB de RAM** em execução.
- **Cabeçalhos de Segurança**: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` e `server_tokens off;`.
- **Performance e Caching**:
  - Assets com hash (`/assets/*`): Cache imutável de 1 ano (`Cache-Control: public, max-age=31536000, immutable`).
  - `index.html`: `Cache-Control: no-cache, no-store, must-revalidate` para garantir que novas versões reflitam instantaneamente.
  - Compressão Gzip ativada para HTML, CSS, JS, SVG e JSON.
- **Roteamento SPA**: Redirecionamento `try_files $uri $uri/ /index.html;` para suporte nativo a rotas de cliente.
- **Healthcheck Nativo**: Endpoint `/healthz` configurado para orquestradores (Kubernetes, Docker Swarm, Railway, Render, etc.).
