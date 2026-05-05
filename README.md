# UniFECAF Flix API

API REST desenvolvida em Node.js para consulta de filmes da plataforma fictícia **UniFECAF Flix**.

O projeto foi desenvolvido como atividade prática da disciplina **Web Programming for Back End**, com o objetivo de aplicar conceitos de desenvolvimento back-end, arquitetura MVC, padrão REST, integração com banco de dados relacional e boas práticas de organização de código.

---

## Objetivo do Projeto

A **UniFECAF Flix API** tem como objetivo disponibilizar informações de filmes armazenados em um banco de dados MySQL.

A API permite:

- Listar todos os filmes cadastrados.
- Buscar um filme pelo ID.
- Filtrar filmes por nome, parte do nome ou conteúdo da sinopse.

---

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Prisma ORM
- JavaScript
- Dotenv
- CORS
- Nodemon
- Postman

---

## Arquitetura Utilizada

O projeto foi organizado utilizando o padrão **MVC**, separando as responsabilidades da aplicação em camadas.

### Model

Responsável pela comunicação com o banco de dados.

No projeto, a camada `models` utiliza o Prisma ORM para consultar os dados da tabela de filmes.

### Controller

Responsável por receber as requisições, chamar os models, aplicar validações e retornar as respostas HTTP.

### Routes

Responsável por definir os endpoints da API e direcionar cada rota para seu respectivo controller.

---

## Estrutura de Pastas

```txt
unifecaf-flix-api/
│
├── prisma/
│   └── schema.prisma
│
├── sql/
│   └── script_banco_filmes.sql
│
├── src/
│   ├── controllers/
│   │   └── filmeController.js
│   │
│   ├── database/
│   │   └── prismaClient.js
│   │
│   ├── models/
│   │   └── filmeModel.js
│   │
│   ├── routes/
│   │   └── filmeRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Banco de Dados

O projeto utiliza um banco de dados MySQL chamado:

```sql
unifecaf_flix
```

A tabela principal utilizada é:

```sql
filmes
```

Campos principais da tabela:

| Campo | Descrição |
|---|---|
| id | Identificador único do filme |
| nome | Nome do filme |
| sinopse | Sinopse do filme |
| duracao | Duração em minutos |
| data_lancamento | Data de lançamento |
| genero | Gênero do filme |
| classificacao | Classificação indicativa |

O script SQL utilizado está disponível em:

```txt
sql/script_banco_filmes.sql
```

---

## Endpoints da API

### Listar todos os filmes

```http
GET /v1/controle-filmes/filme
```

Exemplo de URL:

```txt
http://localhost:3000/v1/controle-filmes/filme
```

Exemplo de resposta:

```json
{
  "status": true,
  "quantidade": 3,
  "filmes": [
    {
      "id": 1,
      "nome": "Matrix",
      "sinopse": "Um programador descobre que vive em uma realidade simulada.",
      "duracao": 136,
      "data_lancamento": "1999-03-31T00:00:00.000Z",
      "genero": "Ficção Científica",
      "classificacao": "14 anos"
    }
  ]
}
```

---

### Buscar filme por ID

```http
GET /v1/controle-filmes/filme/:id
```

Exemplo de URL:

```txt
http://localhost:3000/v1/controle-filmes/filme/1
```

Exemplo de resposta:

```json
{
  "status": true,
  "filme": {
    "id": 1,
    "nome": "Matrix",
    "sinopse": "Um programador descobre que vive em uma realidade simulada.",
    "duracao": 136,
    "data_lancamento": "1999-03-31T00:00:00.000Z",
    "genero": "Ficção Científica",
    "classificacao": "14 anos"
  }
}
```

---

### Filtrar filmes por nome ou sinopse

```http
GET /v1/controle-filmes/filtro/filme?nome=xxx
```

Exemplo de URL filtrando por nome:

```txt
http://localhost:3000/v1/controle-filmes/filtro/filme?nome=Matrix
```

Exemplo de URL filtrando por trecho da sinopse:

```txt
http://localhost:3000/v1/controle-filmes/filtro/filme?nome=realidade
```

Exemplo de resposta:

```json
{
  "status": true,
  "quantidade": 1,
  "filmes": [
    {
      "id": 1,
      "nome": "Matrix",
      "sinopse": "Um programador descobre que vive em uma realidade simulada.",
      "duracao": 136,
      "data_lancamento": "1999-03-31T00:00:00.000Z",
      "genero": "Ficção Científica",
      "classificacao": "14 anos"
    }
  ]
}
```

---

## Status HTTP Utilizados

| Status | Significado | Uso na API |
|---|---|---|
| 200 OK | Requisição realizada com sucesso | Quando a consulta retorna os dados corretamente |
| 400 Bad Request | Requisição inválida | Quando o ID ou parâmetro de filtro é inválido |
| 404 Not Found | Recurso não encontrado | Quando nenhum filme é encontrado |
| 500 Internal Server Error | Erro interno no servidor | Quando ocorre uma falha inesperada na aplicação |

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/GabrielCS02/unifecaf-flix-api.git
```

Acesse a pasta do projeto:

```bash
cd unifecaf-flix-api
```

---

### 2. Instalar as dependências

```bash
npm install
```

---

### 3. Criar o banco de dados

Execute o script SQL disponível em:

```txt
sql/script_banco_filmes.sql
```

Esse script cria o banco de dados, a tabela `filmes` e insere registros iniciais para teste.

---

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`.

Exemplo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/unifecaf_flix"
PORT=3000
```

Substitua `usuario` e `senha` pelos dados do seu MySQL local.

---

### 5. Gerar o Prisma Client

```bash
npx prisma generate
```

---

### 6. Executar a API

Para rodar em modo de desenvolvimento:

```bash
npm run dev
```

Para rodar em modo normal:

```bash
npm start
```

A API será executada em:

```txt
http://localhost:3000
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| npm install | Instala as dependências do projeto |
| npm run dev | Inicia o servidor com Nodemon |
| npm start | Inicia o servidor com Node.js |
| npx prisma generate | Gera o Prisma Client |

---

## Testes no Postman

Os testes da API podem ser realizados no Postman utilizando as seguintes URLs:

```txt
GET http://localhost:3000/v1/controle-filmes/filme
```

```txt
GET http://localhost:3000/v1/controle-filmes/filme/1
```

```txt
GET http://localhost:3000/v1/controle-filmes/filtro/filme?nome=Matrix
```

Os testes devem validar:

- Retorno dos filmes em formato JSON.
- Funcionamento correto dos três endpoints.
- Uso adequado dos status HTTP.
- Tratamento de erros para ID inválido, filme inexistente e filtro vazio.

---

## Boas Práticas Aplicadas

Durante o desenvolvimento da API foram aplicadas as seguintes boas práticas:

- Separação de responsabilidades utilizando arquitetura MVC.
- Uso de variáveis de ambiente para dados sensíveis.
- Arquivo `.env` ignorado no versionamento.
- Uso de `.env.example` como modelo de configuração.
- Remoção da pasta `node_modules` do repositório.
- Organização do código em pastas específicas.
- Retorno de respostas JSON padronizadas.
- Tratamento de erros com status HTTP adequados.
- Uso de ORM para comunicação com banco de dados.
- Criação de script SQL para reprodução do banco.

---

## Exemplo de Retorno de Erro

### Filme não encontrado

```json
{
  "status": false,
  "mensagem": "Filme não encontrado."
}
```

### Parâmetro de filtro não informado

```json
{
  "status": false,
  "mensagem": "O parâmetro nome é obrigatório."
}
```

### Erro interno

```json
{
  "status": false,
  "mensagem": "Erro interno ao listar filmes."
}
```

---

## Requisitos Atendidos

- API desenvolvida em Node.js.
- Uso do padrão REST.
- Organização no padrão MVC.
- Integração com banco de dados MySQL.
- Uso do Prisma ORM para acesso aos dados.
- Implementação dos três endpoints obrigatórios.
- Retorno de status HTTP adequados.
- Script SQL incluído no projeto.
- Projeto organizado para execução local.

---

## Autor

Desenvolvido por **Gabriel Costa**.

GitHub: [GabrielCS02](https://github.com/GabrielCS02)