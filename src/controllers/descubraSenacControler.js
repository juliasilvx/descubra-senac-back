
const conexaobd = require("../../bin/conexaobd");

exports.obtercursos = (req, res) => {

    
    res.status(200).send(selectCustomers());


}



async function selectCustomers() {
    const client = await conexaobd.connect();
    const res = await client.query('SELECT * FROM cursos_s');
    console.log(res.rows);
    return res.rows;




}





exports.teste = (req, res) => {


  




}










