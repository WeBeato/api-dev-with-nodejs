const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const db = {
    users: [
        { id: 1, info: 'mohammad ghanavati', username: 'Mohammad', password: '1290' },
        { id: 2, info: 'amin mehrabi', username: 'Amin', password: '9876' },
        { id: 3, info: 'sajad mosavi', username: 'Sajad', password: 'ssd2000' }
    ]
}

app.post('/api/new-user', (req, res) => {
    console.log(req.body);
    let newUser = { id: db.users.length + 1, ...req.body }
    let allUsers = [...db.users]
    allUsers.push(newUser)
    console.log(`Users => ${JSON.stringify(allUsers)}`);
    res.send('New User Created :))')
})

app.listen(3000)