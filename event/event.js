let btn = document.querySelector("#btn");

btn.onclick = (e) =>{
    console.log(e)
    console.log(e.type);
    console.log("button click!");
    console.log(e.clientX,e.clientY);
    console.log(e.target);
}

let div = document.querySelector("div");

div.onmouseover = ()=>{
    let a=1;
    console.log(`this mouse response! ${a}`);
    a++;
}

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = (e)=>{
    console.log(e);
    console.log(e.type);
    console.log("double click mouse");
    
}

let body = document.querySelector("body");
let mode = document.querySelector("#mode");
let curr = "light";

mode.addEventListener("click", () =>{
    if (curr === "light"){
        body.classList.add("dark");
        body.classList.remove("light")
        curr = "dark";
    }
    else {
        body.classList.remove("light");
        body.classList.remove("dark");
        curr = "light";
    }
    console.log(curr);
    
});