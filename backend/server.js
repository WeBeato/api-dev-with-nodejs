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

app.listen(3000, () => {
    console.log('Server Run on Port 3000');
})