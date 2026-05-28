const express = require('express')

const usersRoutes = express.Router()

usersRoutes.get('/', (req, res) => {
    res.send('Send All Users')
})

usersRoutes.get('/home', (req, res) => {
    res.send('Welcome To Users APIs Home')
})

usersRoutes.post('/new-user', (req, res) => {
    res.send('New User Created')
})

usersRoutes.delete('/remove/:id', (req, res) => {
    res.send('User Removed')
})

usersRoutes.put('/edit/:id', (req, res) => {
    res.send('User Updated')
})


module.exports = usersRoutes