#!/bin/sh

# ==============================================================================
# Healthcheck Script - Yhanko Educa (School Landing Frontend)
# Suporta portas dinâmicas ($PORT) e compatibilidade com Coolify e Docker
# ==============================================================================

PORT_CHECK="${PORT:-8080}"

# Testa primeiro via curl, se não disponível tenta via wget
if command -v curl >/dev/null 2>&1; then
    if curl -f -s "http://127.0.0.1:${PORT_CHECK}/healthz" >/dev/null 2>&1; then
        exit 0
    fi
    if curl -f -s "http://127.0.0.1:${PORT_CHECK}/" >/dev/null 2>&1; then
        exit 0
    fi
    exit 1
elif command -v wget >/dev/null 2>&1; then
    if wget -q -O /dev/null "http://127.0.0.1:${PORT_CHECK}/healthz" >/dev/null 2>&1; then
        exit 0
    fi
    if wget -q -O /dev/null "http://127.0.0.1:${PORT_CHECK}/" >/dev/null 2>&1; then
        exit 0
    fi
    exit 1
else
    exit 1
fi
