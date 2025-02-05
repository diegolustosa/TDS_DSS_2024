const express = require("express");
const bibliotecaController = require("../controller/biblioteca.controller");
const routes = express.Router();

//CRUD Create Read Update Delete
routes.post("/cadLivros", (bibliotecaController.inserirLivros));
routes.post("/cadAutores", (bibliotecaController.inserirAutores));
routes.get("/consultarLivros", (bibliotecaController.consultarLivros));
routes.get("/consultarAutores", (bibliotecaController.consultarAutores));
routes.put("/Livro/:id([0-9]+)", (bibliotecaController.atualizarLivros));
routes.put("/Autor/:id([0-9]+)", (bibliotecaController.atualizarAutores));
routes.delete("/Livro/:id([0-9]+)", (bibliotecaController.deletarLivro));
routes.delete("/Autor/:id([0-9]+)", (bibliotecaController.deletarAutor));
module.exports = routes;