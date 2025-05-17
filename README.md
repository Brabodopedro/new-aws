🧩 Fullstack Demo: Node.js + React + Docker + AWS + CI/CD
Projeto demonstrativo desenvolvido com o objetivo de consolidar conhecimentos avançados em desenvolvimento fullstack, com foco em práticas profissionais utilizadas por desenvolvedores seniores.

🔥 Objetivo
Este projeto serve como base de estudo e portfólio para demonstrar proficiência em:

🧠 Node.js (API RESTful)

🎨 React (frontend)

🐳 Docker (containerização)

☁️ AWS (deploy na nuvem)

🔁 GitHub Actions (CI/CD automatizado)

📘 Swagger (documentação da API)

🗃️ Git (versionamento e boas práticas)

🧱 Arquitetura Geral
txt
Copy
Edit
Cliente (navegador)
    ↓
Frontend (React)
    ↓
Backend (Node.js API - Express)
    ↓
Banco de Dados (MongoDB Atlas)
    ↓
Docker (ambientes isolados)
    ↓
AWS (ECS Fargate, S3, CloudFront)
    ↓
CI/CD (GitHub Actions)
📁 Estrutura do Repositório
bash
Copy
Edit
/fullstack-demo/
├── backend/                 # API Node.js + Swagger
├── frontend/                # Frontend React
├── .github/workflows/       # GitHub Actions
├── docker-compose.yml       # Executa tudo local
└── README.md                # Este arquivo
🚀 Funcionalidades do Projeto
CRUD de usuários

Endpoint /ping retorna pong

Tela de login (mock)

Listagem de usuários no front

Integração frontend ↔ backend

Documentação Swagger em /api-docs

🐳 Docker
Ambos os ambientes (API e frontend) são containerizados:

Dockerfile no backend e frontend

docker-compose.yml na raiz orquestra os dois serviços localmente

☁️ AWS
Backend (Node.js API)
Deploy com ECS Fargate

Imagens armazenadas no ECR

Frontend (React)
Build hospedado em S3

Distribuído via CloudFront

🔁 CI/CD com GitHub Actions
Build automático do React e envio para S3

Build da API, push no ECR e deploy no ECS

Execução em cada push na branch main

📘 Swagger
API documentada automaticamente com swagger-jsdoc

Rota: http://localhost:3001/api-docs

🧪 Tecnologias Utilizadas
Tecnologia	Função
Node.js + Express	Backend REST
React	Interface de usuário
MongoDB Atlas	Banco de dados na nuvem
Docker	Containerização de ambiente
AWS ECS/Fargate	Deploy da API
AWS S3 + CloudFront	Hospedagem do frontend
GitHub Actions	Automação CI/CD
Swagger	Documentação da API

📌 Etapas do Desenvolvimento
Planejar a API (rotas e regras)

Criar frontend em React

Dockerizar backend e frontend

Rodar localmente com Docker Compose

Gerar documentação com Swagger

Subir imagens para ECR (CLI AWS)

Criar serviço no ECS Fargate

Fazer upload do build React no S3

Criar workflow de CI/CD com GitHub Actions

🧑‍💻 Boas Práticas Adotadas
Estrutura modular e escalável

Separação clara de responsabilidades

Uso de .env com .env.example

Versionamento semântico de commits (convencional)

Automatização de testes e deploy

🏁 Resultado Esperado
Com esse projeto, você será capaz de:

✔️ Demonstrar domínio técnico fullstack
✔️ Ter um ambiente real rodando em produção (AWS)
✔️ Exibir um portfólio profissional com deploy, CI/CD e documentação
✔️ Ter autonomia para entregar sistemas completos em qualquer equipe