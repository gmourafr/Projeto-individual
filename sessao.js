// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}



// JS DA CALCULADORA DE KD 
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
            seu K/D é de: <b>${kd.toFixed(2)}<b> <br>
            Professor FalleN diz: ${frase}
        `
    }
}



function entrar() {
    let email = email_input.value
    let senha = senha_input.value

    if (email == '' || senha == '') {
        div_msg.innerHTML = `preencha todos os campos!`
    } else {
        let nome = sessionStorage.getItem('NOME_USUARIO')
        let emailSalvo = sessionStorage.getItem('EMAIL_USUARIO')

        if (email == emailSalvo) {
            div_msg.innerHTML = `bem-vindo de volta, ${nome}! redirecionando...`
            setTimeout(() => {
                window.location = 'dashboard/dashboard.html'
            }, 2000)
        } else {
            div_msg.innerHTML = `e-mail ou senha incorretos!`
        }
    }
}






