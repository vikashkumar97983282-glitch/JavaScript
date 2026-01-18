// fullname="vikash kumar"
// div = "c"
// roll=5



// console.log("this is the first javascript file");
// console.log(fullname)
// console.log(div)
// console.log(roll)


// const a = 5;   // constant variable
// let b = 10;
// console.log("const "+a);
// console.log("let "+b);


// // data types in javascript
// // premitive data types (7)
// // 1. number
// // 2. string
// // 3. boolean
// // 4. null
// // 5. undefined
// // 6. symbol
// // 7. bigint

// // non premitive data types
// // 1. object
// // 2. array
// // 3. function



// // object in javascript
// const person={
//     name:"vikash",
//     age:20,
//     city:"mumbai"
// }
// console.log(person);
// // you can change the value of const object
// person.age=21;
// console.log(person);




// // conditonals in javascript
// let age =16;

// let result= age>=18 ? "you can drive" : "you cannot drive:";
// console.log(result);

// let result2= age>=18 ? "you can vote" : age>=18 ? console.log("adult") : console.log("not adult");

// // one time pop up
// // alert("this is an alert message!");

// // // take input from user with prompt 
// // // example:- prompt("enter your name: ");
// // let age1 = prompt("enter your age: ");
// // console.log("your age is "+age1);



// for (let i=1; i<=5; i++){
//     console.log(i+" vikash kumar");
// }

// // for of loop in javascript
// let name= "vikash kumar";
// size = 0;

// for(let val of name){
//     console.log(val);
//     size++;
// }
// console.log("size of string is: "+size);


// objects loop in javascript
// const student ={
//     name:"vikash kumar",
//     roll:5,
//     div:"c",
//     city:"mumbai"
// }

// for (let key in student){
//     console.log("key: "+key+" value: "+student[key]);
// }



// Question : game to guess a number
// let num=78;
// let guess=prompt("guess a number between 1 to 100: ");
// let attempts=1;

// while(guess != num ){
//     guess = prompt("wrong guess! try again: ");
//     attempts++;
// }
// console.log("congrats! you guessed number "+num+" in "+attempts+" attempts.");




// string methods in javascript with objects
// let student={
//     name:"vikash kumar",
//     city:"mumbai",
//     age:20
// }

// let result= `my name is ${student.name} and i am from ${student.city}. i am ${student.age} years old.`;
// console.log(result);