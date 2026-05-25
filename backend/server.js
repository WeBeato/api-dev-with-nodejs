const http = require('http');
const url = require('url');

let database = {
    users: [
        { id: 1, username: 'ali', password: '90ali95', age: 16 },
        { id: 2, username: 'amin', password: '678', age: 22 },
        { id: 3, username: 'q_yolme', password: 'sfg54', age: 20 },
        { id: 4, username: 'mohammad', password: '007', age: 18 },
        { id: 5, username: 'babak', password: 'asgnivrsrj321', age: 21 },
    ]
};


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const urlParams = url.parse(req.url, true);

    if (urlParams.pathname === '/api/users') {
        const mainUser = database.users.filter(user => user.username.toLowerCase() === urlParams.query.username.toLowerCase());

        if (mainUser.length) {
            res.write(JSON.stringify(mainUser[0]));
            res.end();
        } else {
            res.write(JSON.stringify(null));
            res.end();
        }
    }
});


server.listen(3000);
