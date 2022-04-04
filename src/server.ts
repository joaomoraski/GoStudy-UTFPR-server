import { app } from './app'
import { connectDB } from './connectDB';
const port = 3000;

app.listen(port);

// Connect with Database
await (async function dbConnection():Promise<void>{
    await connectDB({
        host:"localhost",
        name:"GoStudy",
        username:"root",
        password:"root"
    }).catch(err => {
        console.log(err)
    });
})()
console.log(`Rodando em ${port}`)