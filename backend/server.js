const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const usersRoutes = require('./routes/usersRoutes')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/users',usersRoutes)
// app.use('/api/articles',articlesRoutes)
// app.use('/api/products',productsRoutes)

app.listen(3000)