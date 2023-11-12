const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayUsers(data))
}

const displayUsers = user =>{
    const imageTag = document.getElementById('image');
    imageTag.src = user.results[0].picture.large;
    ;

    const genderTag = document.getElementById('gender');
    genderTag.innerText = user.results[0].gender;
    const nameTag = document.getElementById('name');
    nameTag.innerText = user.results[0].name.title + ' ' + user.results[0].name.first + ' '+ user.results[0].name.last;
    const locationTag = document.getElementById('location');
    locationTag.innerText = user.results[0].location.country;



    console.log(user.results[0])
}

loadUser();