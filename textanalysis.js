let number = 1234567899
let value=/^[1-9]\{10}d{9}$/;
if(value.test(enter.toString())){
    console.log("correct")   
}
else{
    console.log("check for a valid number")
}

let text="hello class";
let match=/\b\w+\b/gi;
console.log(match ? text : 0)
console.log(text.length);

