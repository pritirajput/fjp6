let fs = require("fs");
let path = require("path");
//create a directory
let folderPath = path.join(__dirname,"Folder");
console.log(folderPath);

//write in directory
fs.writeFileSync(folderPath,"Hallo I am a new folder");

//reade a directory
/*console.log("before update : ")
let content = fs.readFileSync(folderPath,"utf-8");
console.log(content);

//U-update a file
fs.appendFileSync(folderPath,"\nNewly added content");
console.log("After update : ");
console.log(fs.readFileSync(folderPath,"utf-8"));

//D-delete a file
fs.unlinkSync(folderPath);*/

// create a new file in new folder
let filePath = path.join(folderPath,"File.txt");
console.log(filePath);

//write in file
fs.writeFileSync(filePath,"Hallo I am a new text file");


