import  express  from "express";
import db from './config/dbConnect.js';
import routes from './routes/index.js';

//criamos aqui o teste de conexão:
db.on("error", console.log.bind(console, 'Erro de conexão'));
//aqui abrimos a conexão:
db.once("open", () => {
    console.log('conexão realizada com sucesso')
})


//cria-se a instancia do express:
const  app = express();
app.use(express.json());
routes(app);

export default app;