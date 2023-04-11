import express from "express";
import LivroController from "../controllers/livrosController.js";

// criamos uma variavel para utilizarmos o roteamento do express:
const router = express.Router();

//definir a rota
router
    .get('/livros', LivroController.listarLivros)
    .get('livros/busca', LivroController.listarLivrosPorEditora)
    .get('/livros/:id', LivroController.listarLivrosPorId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.excluirLivro)


export default router;