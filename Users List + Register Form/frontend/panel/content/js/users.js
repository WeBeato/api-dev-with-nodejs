const usersWrapper = document.querySelector('#wrap-users')
const deleteModal = document.querySelector('#delete-modal')
const editModal = document.querySelector('#edit-modal')
const firstNameInput = document.querySelector('#firstname')
const lastNameInput = document.querySelector('#lastname')
const userNameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const editUserBtn = document.querySelector('#edit-user')

let userID = null


window.addEventListener('load', () => {
  getAllUsers()
})

function getAllUsers() {
  fetch('http://localhost:3000/api/users/all')
    .then(res => res.json())
    .then(users => {
      console.log(users)

      usersWrapper.innerHTML = ''

      users.forEach(user => {
        usersWrapper.insertAdjacentHTML(
          "beforeend",
          `<div class="user">
        <div class="btn-groups-column">
          <button class="delete-user-btn" onclick=showDeleteModal("${user.id
          }")>حذف</button>
          <button class="edit-user-btn" onclick=openEditModal(${JSON.stringify(user)
          })>ویرایش</button>
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
}

function showDeleteModal(id) {
  userID = id
  deleteModal.classList.add('visible')
}

function closeDeleteModal() {
  deleteModal.classList.remove('visible')
}

function removeUser() {
  fetch(`http://localhost:3000/api/users/remove/${userID}`, {
    method: 'DELETE',
  }).then(res => res.json())
    .then(data => {
      closeDeleteModal()
      getAllUsers()
    })
}

function openEditModal(user) {
  userID = user.id
  console.log(user);
  firstNameInput.value = user.firstname
  lastNameInput.value = user.lastname
  userNameInput.value = user.username
  passwordInput.value = user.password
  editModal.classList.add('visible')
}

function closeEditModal() {
  editModal.classList.remove('visible')
}

editUserBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let userNewInfo = {
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
    username: userNameInput.value,
    password: passwordInput.value
  }

  fetch(`http://localhost:3000/api/users/edit/${userID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userNewInfo)
  }).then(res => res.json())
    .then(data => {
      console.log(data)
      closeEditModal()
      getAllUsers()
      emptyEditModalInputs()
    })
})

function emptyEditModalInputs() {
  firstNameInput.value = ''
  lastNameInput.value = ''
  userNameInput.value = ''
  passwordInput.value = ''
}

window.addEventListener('click', (e) => {
  if (e.target.id === 'edit-modal') {
    closeEditModal()
  }
})

window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeEditModal()
  }
})
