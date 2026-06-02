const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/usersRoutes')


const app = express();
app.use(bodyParser.json())
app.use(cors())

app.use('/api/users', usersRoutes)

app.listen(3000)