import { app } from './app'

const port = 3000;
const a = 2;

app.listen(port);

if(a === 2){
    console.log("não é pra dar erro");
}

console.log(`Rodando em ${port}`)