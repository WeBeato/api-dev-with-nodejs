const express = require('express')
const cors = require('cors')
const MyIrancellDB = require('./db/MyIrancellDB')

const app = express()
app.use(cors())
app.get('/api/users', (req, res) => {
    let userToken = req.headers.authorization
    let getMainUserQuery = `SELECT * FROM users WHERE token = ${userToken}`

    MyIrancellDB.query(getMainUserQuery, (error, result) => {
        if (error) {
            res.send(null)
        } else (
            res.send(result)
        )
    })
})

app.get('/api/services/:isActive', (req, res) => {
    let isActive = req.params.isActive
    let getServicesQuery = `SELECT * FROM services WHERE isActive = ${isActive}`
    MyIrancellDB.query(getServicesQuery, (error, result) => {
        if (error) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

app.get('/api/recommend-packs', (req, res) => {
    let userToken = req.headers.authorization
    let getUserRecommendPacksQuery = `SELECT * FROM recommend_packet WHERE userID = 1`
    MyIrancellDB.query(getUserRecommendPacksQuery, (error, result) => {
        if (error) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

app.get('/api/user-buy', (req, res) => {
    let userToken = req.headers.authorization
    let getUserBuyInfo = `SELECT * FROM sales WHERE userID = 1`
    MyIrancellDB.query(getUserBuyInfo, (error, result) => {
        if (error) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})