const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://admin:gVKgBBv0QpMZzLS7ZdY9PeCo2vXzplI4@dpg-cged7q284i25mv7opvv0-a.oregon-postgres.render.com/basemoedas_9bu4')


exports.obtercursos = () => { 


    db.one('SELECT *FROM cursos_s', 123)
      .then((data) => {
        console.log('DATA:', data.value)
        return data.value
      })
      .catch((error) => {
        console.log('ERROR:', error)
      })
} 

