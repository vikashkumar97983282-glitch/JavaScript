function sum(){
    const val1 = document.getElementById("value1").value;
    const val2 = document.getElementById("value2").value;
    const val = Number(val1) + Number(val2);
    const r= document.getElementById("res");
    r.innerText = " result = "+val;
    document.getElementById("value1").value="";
    document.getElementById("value2").value="";

    const par = document.getElementById("par");
    par.innerText = `your result is run sucessfully ${val}`;
    // par.innerText = "check your result";
    
};