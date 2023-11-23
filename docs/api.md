# Documentação da API

- **Host:** http://localhost:3000
- **Endpoint:** /api/product
- **Método:** GET

### Parâmetros

- **url (obrigatório):** URL da página do produto.
- **ai (opcional):** Parâmetro opcional para busca usando AI.

### Respostas

- **200 OK:**
    - Retorna um JSON com as informações do produto.
      ```json
      {
        "name": "string - Nome do produto",
        "image": "string - URL da imagem do produto",
        "description": "string - Descrição do produto",
        "price": 0.0, //float - Preço do produto
        "barcode": "string - Código de barras do produto"
      }
      ```
- **404 Not Found:**
    - Retorna quando o produto não é encontrado.

---

## Exemplo de Uso

### Requisição

```http
GET /api/product?url=<url-da-pagina-do-produto>&ai=<opcional>
```

Resposta de Sucesso (200 OK)

```json
{
  "name": "LUTEÍNA + ASTAXANTINA + VITAMINA A MADE IN USA NATURE DAILY 60 COMPRIMIDOS SIDNEY OLIVEIRA",
  "image": "https://cdn.ultrafarma.com.br/static/produtos/821656/small-638221801524360108-821656_3.png",
  "description": "Suplemento Alimentar de Luteína + Astaxantina + Vitamina A em Comprimidos. - A Vitamina A auxilia na Visão - Contém 20 mg de Luteína + 6 mg de Astaxantina + 600 mcg de Vitamina A em 1 comprimido. - Produto fabricado sob certificação FDA. - Made in U.S.A",
  "price": 39.9,
  "barcode": "7908423402841"
}
```

Resposta de Erro (404 Not Found)

```json
{
  "error": "Produto não encontrado"
}
```