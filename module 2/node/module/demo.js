let fs = require("fs");
let path = require("path")
//console.log(fs);

//create a new directory
if(!fs.existsSync("DFolder"))
fs.mkdirSync("DFolder");

//delete directory
//fs.rmdirSync("DFolder");

//read a directory
let folderPath = __dirname;
let content =fs.readdirSync(folderPath);
console.log(content);




