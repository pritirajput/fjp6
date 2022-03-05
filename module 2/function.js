function sayHallo(){
    console.log("Hallo to function");
}
sayHallo();

function sum(num1,num2){
   let add = num1 + num2;
   console.log(add);
}
sum(3,5);

function multipiy(num1,num2){
    return (num1*num2);
}
let ans = multipiy(3,5);
console.log(ans);

let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(5,3));

//IIFE Immediately InvokedFunction Expression
(function(){
    console.log("hello from IIFE");
})();

(function(num1,num2){
    let num=num1/num2;
    console.log(num);
})(15,3);