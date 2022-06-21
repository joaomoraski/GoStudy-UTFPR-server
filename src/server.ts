import { app } from './app'
import { connection } from './connectDB'


const port = process.env.BACKEND_APP_PORT;

app.listen(port);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async function connectionDb(){
    try {
        const resultado = await connection.query("show tables");
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    await connection.authenticate()
        .then(()=>console.log('Connection has been established successfully.'))
        .catch ((error)=>console.error('Unable to connect to the database:', error))
})();


console.log(`Rodando em ${port}`)