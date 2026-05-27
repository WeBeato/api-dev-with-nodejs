const http = require('http')
const express = require('express')

const app = express()

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/api/products') {
//         res.write('Products')
//         res.end()
//     }
// })

// server.listen(3000, () => {
//     console.log('Server Run on Port 3000');
// })

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

app.listen(3000, () => {
    console.log('Server Run on Port 3000');
})