const loadUsers = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = (users) =>{
    const usersContainer = document.getElementById('users-container');
    // for(const user of users){
    //     const name = user.name;
    //     const li = document.createElement('li');
    //     li.innerText = name;
    //     usersContainer.appendChild(li);
    // }
    // atake for each diyeo kora jai 

    users.forEach(user => {
        // const name = user.name;
        // const li = document.createElement('li');
        // li.innerText = name;
        // usersContainer.appendChild(li);
        const ul = document.createElement('ul');
        ul.innerText = `
            User Name :${user.name}
        `;
        usersContainer.appendChild(ul);
    });
}

loadUsers();