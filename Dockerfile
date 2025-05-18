# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos package
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar os demais arquivos
COPY . .

# Expor porta
EXPOSE 3000

# Rodar a aplicação
CMD ["npm", "run", "dev"]

