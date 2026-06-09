window.addEventListener('load', () => {
    const recommendPacketsTable = $.querySelector('.recommend-packets-table')
    const recommendPacketsTableBody = recommendPacketsTable.querySelector('tbody')

    const mainUrlApi = 'http://localhost:3000/api'

    let userToken = localStorage.getItem('user-token')

    fetch(`${mainUrlApi}/recommend-packs`, {
        headers: {
            authorization: userToken
        }
    }).then(res => res.json())
        .then(packets => {
            console.log(packets);

            if (packets.length === 0) {
                recommendPacketsTable.textContent = "بسته‌ای وجود ندارد!"
            } else {
                packets.forEach(packet => {
                    recommendPacketsTableBody.insertAdjacentHTML('beforeend', `
                    <tr>
                        <td>${packet.max_date}</td>
                        <td>${packet.title}</td>
                        <td>${packet.off.toLocaleString('fa-IR')}</td>
                        <td>${packet.price.toLocaleString('fa-IR')}</td>
                        <td><button class="buy-packet-btn lalezar-font">خرید</button></td>
                    </tr>
                `)
                });
            }
        })
})