const axios = require("axios")

let temperatura = 8
let umidade = 70

setInterval(async () => {

    // temperatura varia lentamente
    temperatura += (Math.random() - 0.5)

    // umidade aumenta quando temperatura cai
    umidade += (Math.random() * 2 - 1)

    if (temperatura < 0) temperatura = 0
    if (temperatura > 10) temperatura = 10

    if (umidade < 60) umidade = 60
    if (umidade > 95) umidade = 95

    let riscoGeada = 0

    if (temperatura < 4 && umidade > 80) {
        riscoGeada = 1
    }

    const dados = {
        temperatura: Number(temperatura.toFixed(2)),
        umidade: Math.round(umidade),
        risco_geada: riscoGeada
    }

    try {
        await axios.post("http://localhost:3000/sensor", dados)
        console.log("Dados enviados:", dados)
    } catch (erro) {
        console.log("Erro ao enviar")
    }

}, 3000)