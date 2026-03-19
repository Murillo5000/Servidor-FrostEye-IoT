const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let dados = []

app.post("/sensor",(req,res)=>{
    dados.push(req.body)
    res.send("Dados recebidos")
})

app.get("/sensor",(req,res)=>{
    res.json(dados)
})

app.listen(3000, ()=>{
    console.log("Servidor rodando em http://localhost:3000")
})