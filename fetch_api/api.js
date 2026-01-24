const URL = 'https://jsonplaceholder.typicode.com/posts';
let fact = document.querySelector('#fact');


// let promise = fetch(URL);
// console.log(promise);

const getfacts = async ()=>{
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    // console.log(data['country'][0].probability);
    console.log(data[0]);
    fact.innerText = data[2].title;

}