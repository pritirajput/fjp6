let fs = require("fs");
//console.log(fs);
let path = require("path");
let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

//if file is not exist then write a file in new file
fs.writeFileSync(filePath,"Hallo I am a text file");
//if file is exist then content is overwrite
//fs.writeFileSync(filePath,"Again writing on existing file");

//R-read a file
console.log("before update : ")
let content = fs.readFileSync(filePath,"utf-8");
console.log(content);

//U-update a file
fs.appendFileSync(filePath,"\nNewly added content");
console.log("After update : ");
console.log(fs.readFileSync(filePath,"utf-8"));

//D-delete a file
fs.unlinkSync(filePath);