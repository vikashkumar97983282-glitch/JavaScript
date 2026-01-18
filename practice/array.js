// // let marks=[45,67,89,90,78];
// // console.log(marks);


// let items=[250,645,300,900,50];
// console.log(`original items are:${items}`);

// let i=0;
// for (let val of items){
//     let offer = val / 10;
//     items[i]=val-offer;
//     console.log(`value after offer is : ${items[i]}`);
//     i++;
// }


// // arrow function in javascript

// const sum = (a,b)=>{
//     return a+b;
// }

// let wor="a quick brown fox jumps over the lazy dog."
// const countvow=(str)=>{
//     let count=0;
//     for (let char of str.toLowerCase()){
//         if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countvow(wor))


// forEach loop in javascript
// let colors=["red","green","blue","yellow"];
// colors.forEach((color, index)=>{
//     console.log(`color at index ${index} is ${color}`);
// });

// let numbers=[10,20,30,40,50];
// numbers.forEach((num)=>{
//     console.log(num**2);
// })



// let nums=[5,10,15,20,25];

// let squares=(num)=>{
//     console.log(num*num);
// }

// nums.forEach(squares);


// map function in javascript
// it is used to create a new array by performing a function on each array element

let nums=[1,2,3,4,5,6];

// nums.map((val)=>{
//     console.log(val);
// })

// new array with squares of each element
// let newNums=nums.map((val)=>{
//     return val*val;
// })
// console.log(newNums);


// filter function in javascript
// it is used to create a new array by filtering elements based on a condition

// let evenNums=nums.filter((val)=>{
//     return (val%2==0)
// })
// console.log(evenNums);

// let oddNums=nums.filter((val)=>{
//     return(val%2!=0);
// })
// console.log(oddNums);


// reduce function in javascript
// it is used to reduce the array to a single value by performing a function on each element

// let sum=nums.reduce((res,val)=>{
//     return res+val;
// })
// console.log(sum);


// // greatest number in array
// let greatest=nums.reduce((max,val)=>{
//     return (val>max) ? val:max;
// })
// console.log(greatest);

// // print marks greater than 90

// let marks=[45,67,89,90,78,95,100,88,76];

// let highmarks=marks.filter((val)=>{
//     return val>=90;
// })
// console.log(highmarks);


// print 1 to n numbers in array

// let n=prompt("enter a number: ");

// let arr=[];

// for (let i=1; i<=n; i++){
//     arr.push(i);
// }
// console.log(arr);

// let factorial=arr.reduce((res,val)=>{
//     return res*val;
// })
// console.log("factorial of "+n+" is: "+factorial);
