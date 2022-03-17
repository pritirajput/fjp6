//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");
let path = require("path");


let sourecpath = path.join(__dirname,"..","..","..","..","module 1","index.html");
let destinationpath = path.join(__dirname,"..","..","..","index.html");
console.log(sourecpath);
console.log(destinationpath);
fs.copyFileSync(sourecpath,destinationpath);
