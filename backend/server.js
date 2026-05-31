const mysql = require('mysql')

const webeatoDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webeato'
})

webeatoDB.connect((err) => {
    if (err) {
        console.log('You have error', err);
    } else {
        console.log('Connect to database successfuly :))');
    }
})