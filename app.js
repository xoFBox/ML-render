const express = require("express")
const path = require("path")
const app = express()

let publicPath = path.resolve(__dirname,'./public')

app.use(express.static(publicPath));

const port= process.env.PORT || 3001;
app.listen(port, ()=> console.log('Servidor corriendo en el puerto ${port}'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.post('/register', (req,res) => {
    res.redirect('/')
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.post('/login', (req,res) => {
    res.redirect('/')
})
