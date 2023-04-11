import express from "express";
import AutorController from "../controllers/autoresController.js";

// criamos uma variavel para utilizarmos o roteamento do express:
const router = express.Router();

//definir a rota
router
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.listarAutoresPorId)
    .post('/autores', AutorController.cadastrarAutor)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.excluirAutor)


export default router;