# LogiTrack

API REST para gerenciamento de produtos e controle de estoque, desenvolvida como projeto de aprendizado em desenvolvimento backend.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **Express** — criação de rotas e gerenciamento de requisições HTTP.
- **Prisma ORM** — interação com o banco de dados.
- **PostgreSQL** — banco de dados relacional.
- **Git e GitHub** — versionamento e hospedagem do código.

## Funcionalidades

- Listar todos os produtos.
- Buscar um produto pelo ID.
- Cadastrar novos produtos.
- Atualizar produtos existentes.
- Excluir produtos.
- Armazenar dados no PostgreSQL.

## Endpoints

| Método HTTP | Rota | Descrição |
|---|---|---|
| `GET` | `/` | Verifica se a API está funcionando. |
| `GET` | `/produtos` | Lista todos os produtos. |
| `GET` | `/produtos/:id` | Busca um produto pelo ID. |
| `POST` | `/produtos` | Cadastra um produto. |
| `PUT` | `/produtos/:id` | Atualiza um produto. |
| `DELETE` | `/produtos/:id` | Exclui um produto. |

## Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Banco de dados PostgreSQL configurado.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/R0bertMC/LogiTrack.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd LogiTrack
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure a variável `DATABASE_URL` no arquivo `.env`, utilizando a URL de conexão do banco de dados.

5. Gere o Prisma Client:

   ```bash
   npx prisma generate
   ```

6. Configure e aplique as migrações do banco de dados conforme o ambiente utilizado.

7. Inicie a API:

   ```bash
   npm run dev
   ```

A API estará disponível em `http://localhost:3000`.

## Objetivo

Praticar o desenvolvimento de APIs REST, operações CRUD, organização do código em camadas e integração com banco de dados relacional.

## Autor

**Robert Martins Campos**

- GitHub: [@R0bertMC](https://github.com/R0bertMC)
