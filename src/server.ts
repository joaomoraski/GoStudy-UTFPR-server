import { app } from './app'

const port = 3000;
const a = 2;

a = 3;
app.listen(port);

console.log(`Rodando em ${port}`)