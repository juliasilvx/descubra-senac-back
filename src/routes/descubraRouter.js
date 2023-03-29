const express = require('express');
const router = express.Router();
const controller = require('../controllers/descubraSenacControler')
router.get("/cursos", controller.cursos);
router.get("/obterperguntas", controller.obterperguntas);
router.get("/respostas", controller.respostas);






module.exports = router;
