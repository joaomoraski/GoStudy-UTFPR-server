import { app } from './app'
import { connectDB } from './connectDB'

//gambiara pra merda do eslint
require('dotenv').config({  
    path: ".env"
})


const port = 3000;

app.listen(port);

(async function dbConnection():Promise<void>{
    await connectDB({
        dbHost: process.env.DB_HOST,
        dbName: process.env.DB_NAME, 
        dbUser: process.env.DB_USER, 
        dbPassword: process.env.DB_PASSWORD, 
        dbPort: process.env.DB_PORT,
    }).catch(err => {
        console.log(err)
    });
})()


console.log(`Rodando em ${port}`)