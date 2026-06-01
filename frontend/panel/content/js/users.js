window.addEventListener('load', () => {
  const usersWrapper = document.querySelector('#wrap-users')

  fetch('http://localhost:3000/api/users/all')
    .then(res => res.json())
    .then(users => {
      console.log(users)
      users.forEach(user => {
        usersWrapper.insertAdjacentHTML(
          "beforeend",
          `<div class="user">
        <div class="btn-groups-column">
          <button class="delete-user-btn" onclick=showDeleteModal("${user.id
          }")>حذف</button>
          <button class="edit-user-btn" onclick=openEditModal(${JSON.stringify(
            user
          )})>ویرایش</button>
        </div>
        <div class="user-profile-wrap">
            <div class="user-profile-description">
                <h1 class="user-profile-name"> ${user.username} </h1>
                <h3 class="user-explanations">${user.firstname} - ${user.lastname
          }</h3>
            </div>
            <img class="user-profile" src="content/img/noimg.png" alt="default-image">
        </div>
      </div>`
        )
      });
    })
})

