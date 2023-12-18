# Projeto Store Manager TS

Este é o projeto Store Manager TS, uma aplicação incrível que faz coisas maravilhosas! Para executar este projeto localmente, siga as etapas abaixo.

## Pré-requisitos

Certifique-se de ter o Node.js e o Docker instalados em sua máquina.

- [Node.js](https://nodejs.org/) - Versão 17 ou superior
- [Docker](https://www.docker.com/) - Versão 20.10 ou superior

## Instalação

1. Abra um terminal na pasta raiz do projeto.
2. Execute o seguinte comando para instalar as dependências:

`npm install`

## Configuração do Docker

Certifique-se de que o Docker está em execução.

### Inicialização

Após a instalação das dependências e a configuração do Docker, siga estas etapas:

1. Inicie os contêineres Docker:

`docker-compose up -d`

## Inicie a aplicação:

`npm run start`

Agora a aplicação estará em execução localmente! Acesse-a em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Parar o Projeto

Para encerrar a execução do projeto, utilize o comando abaixo para desligar os contêineres Docker:

`docker-compose down`
