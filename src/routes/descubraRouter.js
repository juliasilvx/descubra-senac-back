const express = require('express');
const router = express.Router();
const controller = require('../controllers/descubraSenacControler')
router.get("/cursos", controller.obtercursos);
router.get("/teste", controller.teste);


module.exports = router;
