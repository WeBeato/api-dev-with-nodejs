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
        let newMasterpieceQuery = 'INSERT INTO `masterpieces` VALUES ("susi","SUSI","Strategic unit of specific information","SUSI project description","website","2025")'
        webeatoDB.query(newMasterpieceQuery, (err, result) => {
            if (err) {
                console.log('You have error in insert query => ', err);
            } else {
                console.log('One project inserted :))');
            }
        })
    }
})