/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const showUsers = document.querySelector("#btn");
const usersData = document.querySelector("#output");
const message = document.querySelector("#message");


    

async function getUsers() {
    const ENDPOINT = 'https://api.github.com/users';
    try {
        let res = await fetch(ENDPOINT);
        return await res.json();
    } catch (error) {
        console.log(error);
    }   
};


showUsers.addEventListener("click", 

async function renderUsers() {
    let users = await getUsers();
    users.forEach(user => {
        const image = document.createElement('img');
        image.setAttribute("id", "avatar")
        const userLogin = document.createElement('h3');
        userLogin.setAttribute("id", "user-login")
        const card = document.createElement('div');
        card.setAttribute("id", "user-card")
        image.src = user.avatar_url;
        userLogin.innerText = `Login: ${user.login}`;
        card.appendChild(image);
        card.appendChild(userLogin);
        usersData.appendChild(card);
    });

    message.remove();
});



 