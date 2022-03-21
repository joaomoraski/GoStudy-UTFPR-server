import express from "express";

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('aaaaaaaaa');
});

app.listen(port, err => {
    if(err){
        return console.log(err);
    }
    console.log(`Rodando em ${port}`)
});