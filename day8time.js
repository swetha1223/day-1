let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours);
let Day=currenttime.getDay();
console.log(Day);
let minits=currenttime.getMinutes();
console.log(minits);

class Exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
}
let result=new Exam("swetha");
class Bank{
    constructor(intialamount=0){
        this._balance=intialamount;
        console.log(this._balance);
    }
    set balance(amountdeposit){
        if(amountdeposit>0){
            this.balance += amountdeposit;
            console.log(_balance);
        }
    }
    
}
let add = new Bank(10);
console.log(add)
add.balance=300;
console.log(add)
console.log(add.balance)

class Addition{
    static Math(a,b){
        return a+b
    }
}
console.log(Addition.Math(12,24))
//import and export
//definition
//export allows u to make variables,functions or class available to other files
//used in module

