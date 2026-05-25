const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (usernameInput.value.length >= 3 && passwordInput.value.length >= 8) {
        let apiUrl = `http://localhost:3000/api/users?username=${usernameInput.value}`;
        fetch(apiUrl).then(res => res.json()).then(data => {
            console.log(data)
            if (data) {
                alert('You can go to your user panel :))');
            }
            else {
                alert('You must first register!');
            }
        });
    } else {
        alert('Inputs values are invalid!!');
    }

});