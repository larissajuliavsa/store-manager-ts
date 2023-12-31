# Projeto Store Manager TS

Apresento o Store Manager TS, uma aplicação para facilitar a gestão de estoque de produtos com TypeScript, Node, Express e MySQL.

## Progresso

### Entidades do projeto

<ul style="list-style: none;">
  <li>✅ Products</li>
  <li>⬜️ Sale</li>
  <li>⬜️ User Admin</li>
</ul>

## Pré-requisitos

Certifique-se de ter o Node.js e o Docker instalados em sua máquina.

- [Node.js](https://nodejs.org/) - Versão 17 ou superior
- [Docker](https://www.docker.com/) - Versão 20.10 ou superior

## Instalação

1. Abra um terminal na pasta raiz do projeto.
2. Execute o seguinte comando para instalar as dependências:

`npm install`

## Configuração de Enviroment e Docker

### Enviroment

Na raiz do projeto possui o arquivo `.env.exemple`, para a aplicação rodar é necessário trocar os valores de acordo com a sua máquina. Mantendo os valores de `MYSQL_DATABASE` e `PORT`.

1. Exemplo de valores em .env:

```
MYSQL_HOST=host
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_DATABASE=database
PORT=port
```

### Docker

Certifique-se de que o Docker está em execução.

Após a instalação das dependências e a configuração do Docker, siga estas etapas:

1. Inicie os contêineres Docker:

`docker-compose up -d`

## Inicie a aplicação:

`npm run start`

Agora a aplicação estará em execução localmente! Acesse-a em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Parar o Projeto

Para encerrar a execução do projeto, utilize o comando abaixo para desligar os contêineres Docker:

`docker-compose down`
