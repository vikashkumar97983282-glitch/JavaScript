// console.log("Hello from script.js file!");
// alert("this is an alert from scipt.js file");

// console.log(window);
// console.dir(document.body);
// console.dir(document.head); 
// document.body.style.backgroundColor = "green";
// document.body.childNodes[1].innerText = "hello";


// dom manipulation
// select with id

// let heading = document.getElementById("heading");
// console.dir(heading);

// select with class name
// let para = document.getElementsByClassName("para");
// console.dir(para);

// select with tag name
// let h4 = document.getElementsByTagName("h4");
// console.dir(h4);

// query selector
// let firstheading = document.querySelector("#heading");
// console.dir(firstheading);

// // query selector all
// let allheadings = document.querySelectorAll("h1");
// console.dir(allheadings);

// with classname query selector all
// let allparas = document.querySelectorAll(".parag");
// console.dir(allparas);

// select with tag name query selector
// let button = document.querySelector(".butt");
// console.dir(button);

// let h1 = document.querySelector("h1");
// console.dir(h1.innerText);

// // changing the text
// h1.innerText += " and welcome you all!";

// text from input box
// function getvalue() {
//     let input = document.querySelector("input");
//     console.dir(input.value);
// }


function getValue() {
    return document.getElementById("inputBox").value;
}

// function addValue() {
//     const hi = document.getElementById("Hi");
//     hi.innerText += " vikash kumar"; // add returned value
// }

function addValue(){
    // const inp=document.getElementById("inputBox").value;
    const hi = document.getElementById("Hi");
    // hi.innerText += " "+getValue();
    hi.innerText = "login sucessfully!";
    document.getElementById("inputBox").value="";


};