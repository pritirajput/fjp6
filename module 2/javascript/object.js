//empty object
let obj = {};
console.log(obj);

let objPriti = {
    Name : "Priti",
    LastName : "Rajput",
    Age : 28,
    PhoneNo : 8707034733
};
console.log(objPriti);

let capAmerica ={
    Name : "Steve",
    Age : 145,
    Friends : ["Bucky","Natasha","Thor","Tony","Brouce"],
    Address :{
        City : "Queens",
        State :"NewYork"
    },
    IsAvenger : "False",
    sayHi:function(){
        console.log("Capton America says Hii");
    }
}
console.log(capAmerica);
console.log(capAmerica.Name);
console.log(capAmerica.Age);
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[0]);
console.log(capAmerica.Address);
console.log(capAmerica.Address.City);
capAmerica.sayHi();
console.log(capAmerica.Name,capAmerica.Friends[1],capAmerica.Address.State);

//add a keyi into a object
capAmerica.Movies = ["Avengers","Civil War","Winter Soldier"];
 
//Delete a key in object
delete capAmerica.sayHi;

//change a key value of object
capAmerica.IsAvenger = "true";

//console into two different way
console.log(capAmerica.Name);
console.log(capAmerica['Name']);
console.log(capAmerica["Address"]["State"]);

