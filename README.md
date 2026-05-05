# UniFECAF Flix API

API REST desenvolvida em Node.js para consulta de filmes da plataforma fictícia UniFECAF Flix.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Prisma ORM
- Dotenv
- CORS
- Nodemon

## Arquitetura

O projeto utiliza o padrão MVC:

- `routes`: define os endpoints da API.
- `controllers`: recebe as requisições e retorna as respostas HTTP.
- `models`: realiza o acesso aos dados usando Prisma.
- `database`: configura a conexão com o Prisma Client.
- `prisma`: contém o schema do Prisma.
- `sql`: contém o script SQL do banco de dados.

## Endpoints

### Listar todos os filmes
GET /v1/controle-filmes/filme

### Buscar filme por ID
GET /v1/controle-filmes/filme/:id

### Filtrar filmes por nome ou sinopse
GET /v1/controle-filmes/filtro/filme?nome=matrix
