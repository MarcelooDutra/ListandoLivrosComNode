import livros from "../models/Livro.js";

//cria-se uma class com os metodos dentro do tipo static para nao precisar instanciar.
class LivroController {
    //metodo get para trazer a lista de livros
    static listarLivros = (req, res) => {
        livros.find()//vai trazer ou listar os arquivos
        .populate('autor') // vai popular ou preencher o campo autor
        .exec((err, livros) => {
            res.status(200).json(livros);
        })
    }

    //metodo get listando por id
    static listarLivrosPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id) 
        .populate('autor', 'nacionalidade')
        .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado`})
            } else {
                res.status(200).send(livros);
            }
        })
    }

    //metodo post para cadastro de livros
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar um livro`})
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    //metodo put para atualização de um livro
    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    //metodo para deletar um livro
    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'success - livro apagado'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivrosPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros) => {
            if(err){
                res.status(400).send({message: err.message});
            } else{
                res.status(200).send(livros);
            }
        })
    }
}

export default LivroController;