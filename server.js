const http = require('http')
const url = require('url')

let database = {
    users: [
        { id: 1, username: 'Ali', email: 'ali@gmail.com', password: '12345' },
        { id: 2, username: 'Mohammad', email: 'mohammad@gmail.com', password: 'mmd_345' },
        { id: 3, username: 'Amin', email: 'amin@gmail.com', password: 'amn132' },
    ],
    courses: [
        { id: 1, title: 'Api Dev With Nodejs', price: 237_000 },
        { id: 2, title: 'React Course', price: 2_200_000 },
        { id: 3, title: 'Js Expert', price: 'Free' },
    ]
}


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)

    if (parsedUrl.pathname === '/api/users') {
        const filtredUser = database.users.filter(user => user.id === Number(parsedUrl.query.id))

        if (filtredUser.length) {
            res.write(JSON.stringify(filtredUser))
            res.end()
        } else {
            res.write('user not found')
            res.end()
        }
    }

})

server.listen(3000)
