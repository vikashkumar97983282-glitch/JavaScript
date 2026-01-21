const student = {
    fullname : "vikash kumar sharma",
    marks : 80,
    PrintMarks: function(){
        console.log("marks",this.marks);
    },
}


class car{

    constructor(name){
        console.log("this is default constructor");
        this.name = name;
    }

    mycar(){
        console.log("this is car.");
    }

    start(){
        console.log("car is start.");
    }

    stop(){
        console.log("car is stop.");
    }

    setbrand(brand){
        this.brand = brand;
    }
}

let car1 = new car("thar");
car1.setbrand("mahindra");
let car2 = new car("scorpio");


class parent {

    constructor(){
        console.log("this is parent constructor")
    }

    hello(){
        console.log("hello parent");
    }

    details(){
        console.log("this is details function");
        console.log("this details from parent class")
    }
}

class child extends parent{

    constructor(branch){
        super();
        // console.log("this is message");
        this.branch = branch;

    }

    work(){
        console.log("software engg")
        // super keyword is used form another class properties
        super.hello();
    }

    message(){
        console.log("this is special message ");
        super.hello();
        super.details();
    
    }

}

// let par = new parent();
let ch = new child("computer engg");