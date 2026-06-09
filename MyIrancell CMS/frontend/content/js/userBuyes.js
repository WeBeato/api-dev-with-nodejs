window.addEventListener('load', () => {
    const userBuyPacksTable = $.querySelector('.recommend-packets-table')
    const userBuyPacksTableBody = userBuyPacksTable.querySelector('tbody')

    const mainUrlApi = 'http://localhost:3000/api'

    let userToken = localStorage.getItem('user-token')

    fetch(`${mainUrlApi}/user-buy`, {
        headers: {
            authorization: userToken
        }
    }).then(res => res.json())
        .then(packs => {
            console.log(packs);

            packs.forEach(pack => {
                userBuyPacksTableBody.insertAdjacentHTML('beforeend', `
                    <tr>
                        <td>${pack.buy_date}</td>
                        <td>${pack.max_date}</td>
                        <td>${pack.title}</td>
                        <td>${pack.off.toLocaleString('fa-IR')}</td>
                        <td>${pack.price.toLocaleString('fa-IR')}</td>
                    </tr>    
                `)
            });
        })
})