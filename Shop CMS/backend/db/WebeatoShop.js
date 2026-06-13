const mysql = require('mysql')

const WebeatoShopDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webeato_shop'
})

module.exports = WebeatoShopDB