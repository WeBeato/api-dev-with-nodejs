const $ = document

window.addEventListener('load', () => {
    const userProfile = $.querySelector('.user-profile')
    const userPersonalInfo = $.querySelector('.user-name')
    const userPhineNumber = $.querySelector('.user-number')
    const userCharge = $.querySelector('.overlay')

    const mainUrlApi = 'http://localhost:3000/api'

    let userToken = localStorage.getItem('user-token')

    fetch(`${mainUrlApi}/users`, {
        headers: {
            authorization: userToken
        }
    }).then(res => res.json())
        .then(user => {
            console.log(user);
            userProfile.setAttribute('src', user[0].profile)
            userPersonalInfo.textContent = `سلام ${user[0].firstname} ${user[0].lastname}`
            userPhineNumber.textContent = user[0].phone
            userCharge.textContent = `${user[0].charge.toLocaleString('fa', 'IR')} تومان`
        })

})