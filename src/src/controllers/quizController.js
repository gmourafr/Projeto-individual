var database = require("../database/config");

function buscarKpis(req, res) {
    var usuario_id = req.params.usuario_id;

    var instrucao = `
        SELECT
            COUNT(*) AS total_tentativas,
            MAX(total_acertos) AS melhor_acertos,
            MAX(total_perguntas) AS total_perguntas,
            SUM(total_acertos) AS soma_acertos,
            SUM(total_perguntas - total_acertos) AS soma_erros
        FROM quiz_tentativas
        WHERE fk_usuario = ${usuario_id}
    `;

    database.executar(instrucao).then(function (resultados) {
        var data = resultados[0];
        var total = (Number(data.soma_acertos) || 0) + (Number(data.soma_erros) || 0);

        res.json({
            total_tentativas: data.total_tentativas || 0,
            melhor_acertos: data.melhor_acertos || 0,
            total_perguntas: data.total_perguntas || 0,
            pct_acerto: total > 0 ? parseFloat(((Number(data.soma_acertos) / total) * 100).toFixed(1)) : 0,
            pct_erro: total > 0 ? parseFloat(((Number(data.soma_erros) / total) * 100).toFixed(1)) : 0,
            soma_acertos: Number(data.soma_acertos) || 0,
            soma_erros: Number(data.soma_erros) || 0
        });
    }).catch(function (erro) {
        res.status(500).json({ erro: erro });
    });
}

function buscarTentativas(req, res) {
    var usuario_id = req.params.usuario_id;

    var instrucao = `
        SELECT
            id,
            DATE_FORMAT(data_tentativa, '%d/%m/%Y') AS data,
            total_acertos,
            total_perguntas
        FROM quiz_tentativas
        WHERE fk_usuario = ${usuario_id}
        ORDER BY data_tentativa ASC
    `;

    database.executar(instrucao).then(function (resultados) {
        res.json(resultados);
    }).catch(function (erro) {
        res.status(500).json({ erro: erro });
    });
}

function salvarTentativa(req, res) {
    var { fk_usuario, total_acertos, total_perguntas, respostas } = req.body;

    var instrucaoTentativa = `
        INSERT INTO quiz_tentativas (fk_usuario, total_acertos, total_perguntas)
        VALUES (${fk_usuario}, ${total_acertos}, ${total_perguntas})
    `;

    database.executar(instrucaoTentativa).then(function (resultado) {
        var fk_tentativa = resultado.insertId;

        var valores = respostas.map(function (r) {
            return `(${fk_tentativa}, ${r.fk_pergunta}, '${r.resposta_dada}', ${r.acertou ? 1 : 0})`;
        }).join(", ");

        var instrucaoRespostas = `
            INSERT INTO quiz_respostas (fk_tentativa, fk_pergunta, resposta_dada, acertou)
            VALUES ${valores}
        `;

        return database.executar(instrucaoRespostas);
    }).then(function () {
        res.json({ mensagem: "Tentativa salva com sucesso!" });
    }).catch(function (erro) {
        res.status(500).json({ erro: erro });
    });
}

module.exports = {
    buscarKpis,
    buscarTentativas,
    salvarTentativa
};
