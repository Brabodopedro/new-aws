# 📈 Projeto - Tracker Cripto com Docker, CI/CD e AWS

Este projeto é um sistema completo para **monitoramento de criptomoedas** com:

- 🧠 Backend Node.js (API REST)
- 🐍 Serviço Python (consulta carteira Binance)
- 🍃 MongoDB (armazenamento dos ativos)
- 🐳 Containers com Docker Compose
- 📦 Versionamento com `semantic-release`
- 🚀 Deploy futuro com GitHub Actions + AWS

---

## ⚙️ Tecnologias

- Node.js + Express + MongoDB
- Python 3.11 + Binance API
- Docker + Docker Compose
- GitHub Actions (CI/CD)
- semantic-release
- AWS ECS + MongoDB Atlas (produção futura)

---

## 📂 Estrutura

📁 backend-node/ → API em Node.js
📁 binance-service/ → Script Python que busca dados da Binance
📁 docker-compose.yml → Orquestração dos serviços

yaml
Copy
Edit

---

## 🔗 Rotas da API (Node.js)

### `GET /ativos`
Retorna os ativos da carteira salvos no MongoDB.

Exemplo:
```json
[
  {
    "asset": "BTC",
    "quantidade": 0.5,
    "valor_entrada_usdt": 25000,
    "data_coleta": "2025-05-31T00:00:00Z"
  }
]
⚡ Fluxo de Execução
📦 Fluxo Geral (Como vai ficar)

mermaid
Copy
Edit
graph LR
subgraph "Docker Compose"
  PY[Python: binance-service] --> Mongo
  Mongo[(MongoDB)]
  Node[Node.js: API] --> Mongo
end

subgraph "Frontend React"
  React[Botão 'Atualizar carteira'] --> PY
  React -->|A cada 5s| Node
end

React -->|Chama rotas| Node
Node -->|Consulta dados| Mongo
O botão "Atualizar carteira" executa o container Python que coleta os dados da Binance.

A cada 5 segundos, o front consulta a API para exibir os valores atualizados sem reload.

O Python grava os dados somente se for um ativo novo.

API em Node.js serve esses dados para o front.

✅ Status Atual
✅ API REST configurada e conectada ao MongoDB

✅ Python busca ativos da Binance e armazena no banco

✅ Docker Compose funcionando com 3 containers (Node, Python, Mongo)

✅ Versionamento semântico funcionando (semantic-release)

🔜 Front-end em React

🔜 Deploy completo na AWS (ECS + S3/CloudFront)

🚀 Como rodar localmente
bash
Copy
Edit
# Builda os containers
docker compose build

# Sobe os serviços
docker compose up -d

# Executa o script Python
docker compose run --rm binance-service
🏷️ Versionamento
Este projeto usa semantic-release para gerar automaticamente:

Tags (v1.1.0)

CHANGELOG.md

Publicação de releases

🧠 Contribuição
Commits devem seguir o padrão feat:, fix:, chore: etc.

Releases automáticas são geradas ao fazer push na branch dev.

📌 Autor
Pedro Henrique Obara
GitHub

LINK EC2 e MongoDB Atlas loading...