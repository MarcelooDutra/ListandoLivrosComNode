//concentrar todas as rotas para não precisar importar uma a uma... 
import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js'

//cria-se uma variavel de rota onde vai receber por parametro a rota:
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    })
    //aqui defino as outras rotas que poderão ser usadas:
    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;