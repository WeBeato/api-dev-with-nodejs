const $ = document
const form = $.querySelector('form')
const firstNameInput = $.querySelector('#firstname')
const lastNameInput = $.querySelector('#lastname')
const userNameInput = $.querySelector('#username')
const passwordInput = $.querySelector('#password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newUserInfo = {
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        username: userNameInput.value,
        password: passwordInput.value
    }

    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserInfo),
    }).then(res => res.json())
        .then(result => console.log(result))
})