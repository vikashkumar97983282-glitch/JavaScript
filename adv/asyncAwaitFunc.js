function user(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("username :",username);
            console.log("password",password);
            resolve("sucess");
        },2000);
    })
    
}

async function data(){
    await user("vikash",12345);
    await user("rahul",12345);
    await user("gaurav",12345);
    await user("vivek",12345);
    await user("raj",12345);
}
data();