const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.listen(port,() => { 
    console.log(`Escutando a porta ${port}`);
    
})

app.get('/user/:id',(req,res) => {
    res.send(`resposta user ${req.params.id}`)
})