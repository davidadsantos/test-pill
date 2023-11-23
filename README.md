# Teste Pill

Dependências:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Make](https://www.gnu.org/software/make/)

O projeto foi dividido em duas partes: o frontend e o backend.

## Backend

O backend foi desenvolvido em Node.js com Typescript e Express.

## Frontend

O frontend foi desenvolvido em React com Typescript e Next.js.

## Executando o projeto
Nas pastas `frontend` copie o arquivo `.env.example` para `.env`.

Nas pastas `backend` copie o arquivo `.env.example` para `.env`. \
Os parâmetros `OPENAI_API_KEY` e `OPENAI_MODEL` 
devem ser preenchidos para o funcionamento da busca com IA.
De preferência, utilize o modelo `gpt-4-1106-preview` em `OPENAI_MODEL` para obter melhores resultados.\
O parâmetro `OPENAI_API_KEY` deve ser preenchido com a chave de API do OpenAI. 
Para obter a chave de API, acesse https://platform.openai.com/api-keys.

Para executar o projeto, basta executar o comando `make setup` na raiz do projeto.

```bash
make setup
```

O app ficará disponível em http://localhost:8080.


## Testes

Para executar os testes, basta executar o comando `make test` na raiz do projeto.
Ou `make test-frontend` para executar os testes do frontend e `make test-backend` para executar os testes do backend.

```bash
make test
```

Para mais informações, consulte o arquivo [Makefile](Makefile) na raiz do projeto.

## Documentação da API

Acesse a documentação da API em [api.md](docs/api.md).




