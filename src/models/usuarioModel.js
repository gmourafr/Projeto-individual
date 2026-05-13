var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL - function autenticar():", email, senha);
    var instrucaoSql = `
        SELECT id, nome, email FROM usuarios WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarLogin(fk_usuario) {
    console.log("ACESSEI O USUARIO MODEL - function registrarLogin():", fk_usuario);
    var instrucaoSql = `
        INSERT INTO logins (fk_usuario) VALUES ('${fk_usuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL - function cadastrar():", nome, email, senha);
    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function loginsPorDia() {
    console.log("ACESSEI O USUARIO MODEL - function loginsPorDia()");
    var instrucaoSql = `
        SELECT DATE_FORMAT(data_login, '%d/%m/%Y') AS data, COUNT(*) AS quantidade
        FROM logins
        GROUP BY DATE(data_login)
        ORDER BY DATE(data_login) DESC
        LIMIT 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function vitoriasFallen() {
    console.log("ACESSEI O USUARIO MODEL - function vitoriasFallen()");
    var instrucaoSql = `
        SELECT nome AS time, vitorias FROM times ORDER BY id ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    registrarLogin,
    cadastrar,
    loginsPorDia,
    vitoriasFallen
};