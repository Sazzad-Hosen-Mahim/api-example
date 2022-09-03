const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}

const displayUsers = users =>{
    console.log(users);
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('styleDiv')
        userDiv.innerHTML = `
        <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last} </h3>
        <h5>User Email: ${user.email}</h5>
        <p>User Location: ${user.location.city}, ${user.location.country} </p>
        `;

        usersContainer.appendChild(userDiv);


    }
}

loadUsers();