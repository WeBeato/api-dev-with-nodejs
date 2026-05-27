const http = require('http')
const express = require('express')
const { json } = require('stream/consumers')

const app = express()

app.use(express.json({ extended: false }))

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/api/products') {
//         res.write('Products')
//         res.end()
//     }
// })

// server.listen(3000, () => {
//     console.log('Server Run on Port 3000');
// })

let db = {
    users: [
        { id: 1, name: 'Ali', phone: '09123456789' },
        { id: 2, name: 'Mohammd', phone: '09999999999' },
    ]
}

app.get('/api/products', (req, res) => {
    res.send('Yooo!!')
})
app.get('/api/admins', (req, res) => {
    res.send('Admins Show')
})
app.delete('/api/user/remove/:userid', (req, res) => {
    console.log(req.params);
    res.send('User Deleted')
})
app.get('/users/:userID/articles/:articleID', (req, res) => {
    console.log(req.params);
    res.send(`Article ID: ${req.params.articleID} && User ID: ${req.params.userID}`)
})
app.get('/products/:productName', (req, res) => {
    console.log(req.params);
    res.send(`Course Name: ${req.params.productName}`)
})

app.post('/api/new-user', (req, res) => {
    console.log(req.body);
    let newUser = req.body
    db.users.push(newUser)
    res.send(`New user created! => ${JSON.stringify(db.users)}`)
})

app.listen(3000, () => {
    console.log('Server Run on Port 3000');
})