let limites = [0.5, 0.8, 1.0, 1.2, 1.5, 2.5]
let frases = [
    "vai treinar moleque, tá mais perdido que flash no pé",
    "ainda tô te olhando... mas esse KD tá feio hein",
    "tá no caminho, mas ainda tá mais perdido que cego em tiroteio",
    "ok, agora você existe no jogo",
    "agora sim, digno de não ser kickado",
    "calma aí… tá carregando ou só caiu contra noob?",
    "Pode BANIR ESSE CARA VALVE",

]

function calcular() {
    let kills = Number(ipt_kills.value)
    let mortes = Number(ipt_mortes.value)

    if (kills <= 0 || mortes <= 0) {
        div_resultado.innerHTML = `insira valores válidos!`
    } else {
        let kd = kills / mortes
        let frase = frases[frases.length - 1]
        let achou = false

        for (let i = 0; i < limites.length; i++) {
            if (kd < limites[i] && achou == false) {
                frase = frases[i]
                achou = true
            }
        }
        div_resultado.innerHTML = `
            seu k/d: <b>${kd.toFixed(2)}<b> <br><br>
            Professor FalleN diz: ${frase}
        `
    }
}