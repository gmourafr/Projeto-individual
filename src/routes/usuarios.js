var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/logins-por-dia", function (req, res) {
    usuarioController.loginsPorDia(req, res);
});

router.get("/vitorias-fallen", function (req, res) {
    usuarioController.vitoriasFallen(req, res);
});

module.exports = router;