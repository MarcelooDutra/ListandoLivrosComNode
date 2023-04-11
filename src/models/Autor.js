import mongoose from "mongoose";

//cria-se uma variavel que vai representar como sera o schema no banco
const autorSchema = new mongoose.Schema(
    {
        id: { type: String},
        nome: { type: String, required: true},
        nacionalidade: { type: String}
    },
    {
        versionKey: false
    }
)

//cria-se uma variavel pra associar com o schema e poder exportar para que possa ser utilizado em outros arquivos.
const autores = mongoose.model('autores', autorSchema)

export default autores;