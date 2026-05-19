var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.get("/kpis/:usuario_id", quizController.buscarKpis);


router.get("/tentativas/:usuario_id", quizController.buscarTentativas);


router.post("/salvar", quizController.salvarTentativa);

module.exports = router;
