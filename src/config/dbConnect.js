//importa o mongoose para utiliza-lo
import mongoose from "mongoose";

//criamos a conexao com banco:
mongoose.connect("mongodb+srv://Alura-Node:1234@cluster0.pfiupqi.mongodb.net/alura-node");

//criamos uma variavel para poder exportar e outras aplicações usarem:
let db = mongoose.connection;

export default db;