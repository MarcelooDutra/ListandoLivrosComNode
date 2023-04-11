import autores from "../models/Autor.js";

//cria-se uma class com os metodos dentro do tipo static para nao precisar instanciar.
class autorController {
    //metodo get para trazer a lista de autores
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    //metodo get listando por id
    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do autor não localizado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    //metodo post para cadastro de autores
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar um autor`})
            }else{
                res.status(201).send(autor.toJSON());
            }
        })
    }

    //metodo put para atualização de um autor
    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    //metodo para deletar um autor
    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'success - autor apagado'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default autorController;