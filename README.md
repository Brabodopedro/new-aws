🚀 Projeto Node.js API — Pipeline Docker + Versionamento + Deploy na AWS
📦 Sobre
Este projeto é uma API simples em Node.js (API de ping-pong e documentação Swagger) com:

🐳 Pipeline completo para geração de imagens Docker

🏷️ Versionamento automático com Semantic Release

🔁 Deploy automatizado via Docker Hub

☁️ Deploy bem-sucedido na AWS ECS Fargate

🌍 Deploy na AWS
✅ O projeto está rodando em ambiente de produção na AWS ECS Fargate, acessível publicamente:

API Health Check → http://18.214.87.127:3000/ping

Documentação Swagger → http://18.214.87.127:3000/api-docs

🐙 Fluxo de Docker + Versionamento
✅ Organização das Branches
Branch	Função	Imagem Docker
main	Produção	brabodopedro/my-docker:latest
dev	Desenvolvimento e testes	brabodopedro/my-docker:dev

🔥 Funcionamento dos Workflows
Evento	Ação
Push ou Pull Request na main	Build da imagem → Push para Docker Hub como latest (produção)
Push ou Pull Request na dev	Build da imagem → Push para Docker Hub como dev (desenvolvimento)

🏗️ Pipeline Docker
🔧 Build e Push da Imagem dev (branch dev)
Trigger: Push ou Pull Request na branch dev

Resultado:
Imagem → brabodopedro/my-docker:dev

🚀 Build e Push da Imagem latest (branch main)
Trigger: Push ou Pull Request na branch main

Resultado:
Imagem → brabodopedro/my-docker:latest

🏷️ Versionamento Automático
Utilizamos Semantic Release para versionamento automático:

Tipo de Commit	Impacto na versão	Exemplo
fix:	🔼 Patch (0.0.X)	fix: corrige bug da rota /ping
feat:	🔼 Minor (0.X.0)	feat: adiciona rota /status
BREAKING CHANGE:	🔼 Major (X.0.0)	Alterações que quebram compatibilidade

🚀 Tags e Releases Automáticas
A cada merge na main, uma nova tag (v1.0.3, v1.1.0...) é gerada automaticamente.

A tag é publicada na aba Releases do GitHub.

O arquivo CHANGELOG.md é atualizado automaticamente com as mudanças.

🗂️ Estrutura dos Workflows
Arquivo	Função
.github/workflows/docker-prod.yml	Build da imagem latest na branch main
.github/workflows/docker-dev.yml	Build da imagem dev na branch dev
.github/workflows/release.yml	Versionamento automático com Semantic Release

🔐 Secrets utilizados no GitHub Actions
Nome	Descrição
DOCKER_USERNAME	Usuário do Docker Hub
DOCKER_PASSWORD	Token de acesso do Docker Hub
GH_TOKEN	Token GitHub (para criar tags e releases)
SSH_PRIVATE_KEY	Chave SSH (para push via semantic-release)
AWS_ACCESS_KEY_ID	Chave de acesso AWS (para deploy futuro)
AWS_SECRET_ACCESS_KEY	Chave secreta AWS (para deploy futuro)

🚀 Como rodar localmente com Docker
1. Build da imagem
bash
Copy
Edit
docker build -t brabodopedro/my-docker .
2. Rodar o container
bash
Copy
Edit
docker run -p 3000:3000 brabodopedro/my-docker
API estará disponível em:
👉 http://localhost:3000/ping

🌍 Deploy na AWS — ✅ Concluído com sucesso
✅ O projeto foi publicado na AWS ECS usando a imagem brabodopedro/my-docker:latest

✅ Rodando na infraestrutura Serverless da AWS Fargate

🚀 API pública disponível em:

http://18.214.87.127:3000/ping

http://18.214.87.127:3000/api-docs

📜 Licença
MIT

✨ Status do Projeto
✅ Pipeline Docker — ✔️
✅ Versionamento Automático — ✔️
✅ Deploy AWS (manual) — ✔️
🔄 Deploy automatizado via GitHub Actions na AWS — Em desenvolvimento
