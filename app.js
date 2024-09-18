
const express = require('express')
const app = express();
const port = 3000;
const router = require('./routes/translate')
app.get('/',(req,res) => {
    res.send('Hello World');
})

app.use(express.json())

app.listen(port,() => { 
    console.log(`Escutando a porta ${port}`);
    
})


const translate = router;
app.use('/exercise',translate.router)