const mysql = require('mysql')

const webeatoDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webeato'
})

module.exports = webeatoDB