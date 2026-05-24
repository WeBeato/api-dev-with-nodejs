const http = require('http')

// http.createServer((req, res) => {
//     console.log('Request:', req.method, req.url);
// }).listen(3000)


const server = http.createServer((req, res) => {
    console.log('Request:', req.method, req.url);
})

server.listen(3000)
