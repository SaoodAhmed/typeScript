export{}

// class person{
//     name:string;
//     age:number;

//     constructor(Pname:string, Page:number){
//         this.name=Pname;
//         this.age=Page;
//     }

//     show(){
//         console.log(this.name+" is "+this.age+" years old");
//     }
// }

// new person("Saud",23).show();


// class fruits{
//     show(){
//         console.log("This is a class of fruits")
//     }
// }

// let afruit = new fruits();

// afruit.show();



class fan{
    comp:string = "Pak";
    rpm:number = 5000;
    show(){
        console.log(this.rpm, this.comp)
    }

}
new fan().show();


class mobile{
    name:string;
    price:number;
    broke?:string;
    
    constructor(name:string, price:number, broke?:string){
        this.name = name;
        this.price = price;
        this.broke = broke;
    }
    feature(){
        if(typeof this.broke==='string'){
            console.log(this.name+" need to be Repair & for repairing price should be "+this.price)
        }else{
            console.log("not broken!!")
        }


    }
        
}

let mob = new mobile("Samsung",5000,"Broken")
mob.feature();




