# Usar uma imagem base do Python
FROM python:3.9 AS builder

# Instalar o Node.js
RUN apt-get update && apt-get install -y nodejs npm

WORKDIR /app

# Copiar e instalar dependências do Node.js
COPY package*.json ./
RUN npm install

# Copiar o restante do código e compilar
COPY . .
RUN npm run build

# Usar uma imagem base do Python novamente
FROM python:3.9

WORKDIR /app

# Copiar os arquivos construídos e diretórios necessários
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/uploads ./uploads
COPY --from=builder /app/transcriptions ./transcriptions
COPY package*.json ./

# Instalar dependências do sistema
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    apt-get install -y ffmpeg git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Instalar dependências do Python
RUN pip install --upgrade pip setuptools wheel && \
    pip install triton openai-whisper

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]

# Expor a porta 3000
EXPOSE 3000
