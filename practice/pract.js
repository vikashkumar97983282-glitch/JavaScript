let a=Number(prompt("enter the value:"));
let b=Number(prompt("enter the value:"));

const sum = (a,b)=>{
   return a+b;
};
console.log(sum(a,b));


var val="this is vowel testing code";

const count=(str)=>{
    let count=0;
    for(let char of str.toLowerCase()){
        if (char=='a' || char=='e' || char=='i' || char=='o' ||char=='u'){
            count++;
        }
    }
    return count;

};
console.log(count(val))