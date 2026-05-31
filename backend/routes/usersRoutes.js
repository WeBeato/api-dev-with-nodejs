const express = require('express')
const webeatoDB = require('../db/webeatoDB')


const usersRoutes = express.Router()

usersRoutes.post('/', (req, res) => {
    const body = req.body

    webeatoDB.connect((err) => {
        if (err) {
            console.log('You have error! => ', err);
        } else {
            console.log('Connect to webeato db successfully.');
            let date = new Date().toLocaleDateString('fa-IR')

            let newUserInsertQuery = `INSERT INTO users VALUES (NULL, "${body.firstname}", "${body.lastname}", "${body.username}", "${body.password}", "${date}")`

            webeatoDB.query(newUserInsertQuery, (err, result) => {
                if (err) {
                    console.log('insert user faild!', err);
                    res.send(null)
                } else {
                    console.log('user inserted.');
                    res.send(true)
                }
            })
        }
    })
})

module.exports = usersRoutes