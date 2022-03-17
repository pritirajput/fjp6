//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require("path");

//create a new directory
if(!fs.existsSync("Folder"))
fs.mkdirSync("Folder");

// create a file
let filePath = path.join(__dirname,"Folder","file.txt");
console.log(filePath);

//write a content in that txt file
fs.writeFileSync(filePath,"New file has been made");