# Boardcamp

## Notion
- https://www.notion.so/bootcampra/Projeto-15-Boardcamp-986b53cdbc5547ecbab6ce6848136607

## front-end
- https://github.com/bootcamp-ra/boardcamp-front

## banco de dados
- Descompactar o arquivo database-boardcamp.zip
- Dentro da pasta, executar bash ./create-database
- Acesso ao banco

```
DATABASE_URL=postgres://bootcamp_role:senha_super_hiper_ultra_secreta_do_role_do_bootcamp@localhost:5432/boardcamp
```

- Acesso (via pg):
``` js
const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});
```