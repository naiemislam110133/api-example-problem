const loadUserFetch = () =>{
    const url = "https://randomuser.me/api/?gender=female";
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
    .catch(error => console.log(error));
}

// abar async methode follow kore korbo upor o nicher ta akoi kaj korbe 

const loadUserAsync = async () =>{
    const url = "https://randomuser.me/api/?gender=female";
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0].name.last);
}

const displayUser = user =>{
    console.log(user);
}