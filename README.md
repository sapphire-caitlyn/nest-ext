# Guia de Configuração e Execução da API

Este guia explica como configurar e executar sua aplicação API NestJS.
✅ Pré-requisitos

    Node.js (v16+)

    npm

    Instância MongoDB

⚙️ Configuração do Ambiente

    Crie um arquivo .env no diretório raiz com as seguintes variáveis:

    MONGODB_URL=mongodb://sua-string-de-conexao-mongodb
    JWT_SECRET=sua-chave-secreta-jwt

📦 Instalação

Instale todas as dependências:

    npm install

🚀 Executando a API
🔧 Modo de Desenvolvimento

    npm run start:dev

🏭 Modo de Produção

    npm run build
    npm run start:prod

📘 Documentação da API

Uma vez que a aplicação esteja em execução, você pode acessar a documentação Swagger em:

    http://localhost:3000/api
