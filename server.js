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
    const queryStrings = url.parse(req.url, true).query

    console.log(queryStrings.name);

    if (req.url === '/api/users') {
        let users = database.users;
        res.write(JSON.stringify(users))
        res.end()
    } else if (req.url === '/api/courses') {
        let courses = database.courses;
        res.write(JSON.stringify(courses))
        res.end()
    } else {
        res.write('Error 404 :/ Api not found')
        res.end()
    }
})

server.listen(3000)
