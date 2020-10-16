import express from "express";

const app = express();

app.use(express.json()); // aceitando json

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego&page=2
// Route Params: http://localhost:3333/users/1 (indentificar um recurso)
// Body: http://localhost:3333/users/1 (indentificar um recurso) - informações mais complexas

app.get("/users/:id", (request, response) => {
  console.log(request.query); // parametros url
  console.log(request.params); // parametros da rota
  console.log(request.body);
  return response.json({ message: "HelloWorld" });
});

app.listen(3333);

/* Formas de lidar com dados: 
Driver nativo - Digita as querys normalmente como se tivesse no sql
Query Builder - do adonis que eu uso ou knex('users').select('*').where('name', 'Diego') - CONSTRUTOR DE QUERYS
ORM - Object Relational Mapping - */

/*

{
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "migrations": ["./src/database/migrations/*.ts"], - pega todos arquivos typescript dessa pasta
  "cli": {
    "migrationsDir": "./src/database/migrations" - pra onde as migrations criadas vão
  }
}
*/
