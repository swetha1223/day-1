//array
//java (),[normal way] 2types
//collection of different types of value and in js it is said as heterogenous
//op three

let number=[1,2,"three", true];
let names=new Array("john,james");
console.log(number[2]);


//filter method\\
//result will be filterd condition=true arg passed or no arg passed when false filter done
//filter of method
//let result=number.filter()
 //()->pass arg  number ->type  and array  
 //op ['three']  
                  
let result=number.filter(number=>number[1]);
console.log(result);


//slice = delete element based on the index value
//splice = changes the orginal array by adding/removing item at specific index
//-> printing
// obj.key . method 1
//obj[key] [] method 2
let details = {
    name: "js",
    totalmark: 90,  // number, not string
  
    // nested object
    subject: {
      dbms: 98,
      java: 99
    },
  
    avg: function() {
      // calculate average of subject marks
      //let sum = Object.values(this.subject);
      //let sum = marks.reduce((acc, val) => acc + val, 0);
      //return sum / marks.length;
    //}
  //};
  
  //console.log(details.totalmark);      
//  console.log(details["name"]);         
  //console.log(details.subject.dbms);   
 // console.log(details.subject.java);    
 // console.log(details.avg());          
  
  const person={
    name:"asha",
    age:"21",
    city:"coimbatore"
  };
  //deconstructing
  const{name,age,city}=person;
  console.log(name);
  console.log(age);
  console.log(city);

  
