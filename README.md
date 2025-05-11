# whisper-ec2-captcha-api

Este projeto fornece uma solução para transcrever áudios de CAPTCHA numéricos utilizando o modelo Whisper da OpenAI.  
A aplicação é construída com Node.js, empacotada em uma imagem Docker e implantada em uma instância EC2 da AWS utilizando o Serverless Framework.

---

## 🧩 Visão Geral

- 🎧 Transcrição de áudio com o modelo Whisper da OpenAI
- 🌐 API Node.js para envio e retorno da transcrição
- 🐳 Docker para empacotamento da aplicação
- ☁️ Deploy automatizado via Serverless Framework
- 📦 Criação de instância EC2 para execução da imagem

---

## 📁 Estrutura do Projeto

```shell
.
├── src/
│ └── index.ts
├── uploads/
├── transcriptions/
├── Dockerfile
├── serverless.yml
├── deploy_docker.sh
├── package.json
├── esbuild.config.js
└── client.ts
```


---

## 🚀 Como Usar

### Pré-requisitos

- Node.js e npm instalados
- Docker instalado
- Conta no DockerHub
- AWS CLI configurado (`aws configure`)
- Serverless Framework instalado globalmente (`npm install -g serverless`)

### Instalação

```bash
git clone https://github.com/joaoaluz/whisper-ec2-captcha-api.git
cd whisper-ec2-captcha-api
npm install
npm run build
```

Docker (local)

```bash
docker build -t whisper-captcha-api .
docker run -p 3000:3000 whisper-captcha-api
```

Deploy na AWS com Serverless

```bash
serverless deploy
```

## 🛠️ Tecnologias Utilizadas

<p align="left"> 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="40" height="40"/> 
    <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS"/> 
    <img src="https://img.shields.io/badge/Serverless-FaaS-red?style=for-the-badge&logo=serverless" alt="Serverless Framework"/> 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40"/> 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="40" height="40"/> 
</p>