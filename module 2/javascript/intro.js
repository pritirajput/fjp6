console.log("hallo");
console.log("Pepcoding");
let num =10;
console.log(num);
let char = "pepcoding";
console.log(char);
let bool = true;
for(let i=1; i<=5; i++){
    console.log(i);
}


console.log("is a prime number");
let n=7;

let flag = true;


    for(let j=2; j*j<=n; j++){
        if(n%j == 0){
            flag=false;
        }
    }
    if (flag == true) {
        console.log("prime number");
    }
    else {
        console.log("number is  not prime");
    }

