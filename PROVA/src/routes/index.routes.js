const express = require("express");
const bibliotecaRoute = require("./biblioteca.router");
const routes = express.Router();

routes.use("/biblioteca", bibliotecaRoute)

module.exports = routes;