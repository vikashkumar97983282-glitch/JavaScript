// let met1=document.getElementById("head");
// let met2=document.getElementById("inp");
// let test=document.getElementById("test");




// function hello(){
//     console.log("hello coder's i hope you are doing well!");
//     test.innerHTML=met2.value;
//     met2.value="";
// }


// console.log("first");
// console.log("second");

// function hello(){
//     console.log("hello coders!");
// }
// setTimeout(hello,2000)

// console.log("third");
// console.log("fourth");



// function print(Name, nextName){
//     setTimeout(()=>{
//         console.log("hello tester!",Name);
//         if(nextName){
//             nextName();
//         }
//     },3000)
// }
// // function inside function (arrow function)
// // callback  
// print("vikash",()=>{
//     console.log("loading...");
//     print("rahul",()=>{
//         console.log("loading...");
//         print("gaurav",()=>{
//             console.log("loading...");
//             print("ashif",()=>{
//                 console.log("loading...");
//                 print("rajesh bhai")
//             })
//         })
//     })
// });



// promises
let promise=new Promise((resolve,reject)=>{
    console.log("this is promises!");
    // resolve("successed");
    reject("error");
})