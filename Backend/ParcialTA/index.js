import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js';  
import routerAPI from './routes/index.js';  
import cors from "cors";
const port = process.env.PORT;
const app = express();



connectDB();

app.use(cors()); 
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    console.log('Ruta Raíz');
    res.send ('Home');
});


routerAPI(app);


app.listen(port, () => {
    console.log(chalk.green(`Servidor Web en el puerto ${port}`));
});
