const usernameInput = document.querySelector('#username');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let apiUrl = `http://localhost:3000/api/users?username=${usernameInput.value}`;
    fetch(apiUrl).then(res => res.json()).then(data => console.log(data));
});