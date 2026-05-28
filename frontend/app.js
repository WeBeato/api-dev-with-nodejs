const $ = document
const form = $.querySelector('#register')
const info = $.querySelector('#info')
const username = $.querySelector('#username')
const password = $.querySelector('#password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newUser = {
        info: info.value,
        username: username.value,
        password: password.value
    }

    fetch('http://localhost:3000/api/new-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.text())
        .then(data => console.log(data))
})