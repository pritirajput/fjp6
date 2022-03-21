let str= "i am a string";
console.log(str);
 
console.log("length of a string");
let len = str.length;
console.log(len);

console.log("sliced method");
let slicstr =str.slice(3,7);
console.log(slicstr);

console.log("replacement method")
let  replacestr = str.replace("i","that");
console.log(replacestr);

console.log("change in upper case");
let upperstr = str.toUpperCase();
console.log(upperstr);

console.log("concate method");
let firststr = "Priti";
let secondstr = "Rajput";
let constr = firststr.concat(secondstr);
console.log(constr);
 
console.log("add two string without using concat methad");
let fullstr = firststr+secondstr;
console.log(fullstr);

console.log("split method");
let splitstr = str.split("i ");
console.log(splitstr);


