
const conexaobd = require("../../bin/conexaobd");

exports.obtercursos = (req, res) => {


    res.status(200).send(conexaobd.obtercursos());


}


exports.teste = (req, res) => {


  




}










