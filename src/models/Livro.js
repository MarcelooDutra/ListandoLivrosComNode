import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
)

//cria-se uma variavel para que possa ser exportada e utilizada em outro arquivo e no parametro o primeiro e o nome da coleção e o segundo o formato que será utilizado que e o acima criado. Não precisamos enviar por parametro o nome da coleção pq é criada automaticamente no banco.
const livros = mongoose.model('livros', livroSchema);

export default livros;