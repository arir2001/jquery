const API_KEY = 'fj9GFtcx1ZSjdD1MU-5tHtRbSQU';

const API_URL = 'https://ci-jshint.herokuapp.com/api';

const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e){
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    //template literal

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok){
        console.log(data);
    }else{
        console.log("poop")
    }
}
        

