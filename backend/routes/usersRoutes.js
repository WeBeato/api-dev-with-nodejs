const express = require('express')
const webeatoDB = require('../db/webeatoDB')


const usersRoutes = express.Router()

usersRoutes.post('/new-user', (req, res) => {
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

usersRoutes.get('/all', (req, res) => {
    console.log('Connect to webeato db successfully.');
    let getAllUsersQuery = `SELECT * FROM users`

    webeatoDB.query(getAllUsersQuery, (err, result) => {
        if (err) {
            console.log('Ger users faild!', err);
            res.send(null)
        } else {
            console.log('All users => ', result);
            res.send(JSON.stringify(result))
        }
    })
})

usersRoutes.delete('/remove/:userID', (req, res) => {
    let userID = req.params.userID
    console.log('Connect to webeato db successfully.');

    let deleteUserQuery = `DELETE FROM users WHERE id = ${userID}`
    webeatoDB.query(deleteUserQuery, (err, result) => {
        if (err) {
            console.log('Delete user faild!', err);
            res.send(null)
        } else {
            console.log(`User with id:${userID} deleted => `, result);
            res.send(JSON.stringify(result))
        }
    })
})

module.exports = usersRoutes