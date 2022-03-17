//"C:\Users\slraj\Desktop\pepcoding\fjp6\module 2\node\path.js"
let path = require("path");
//console.log(path);
//let extensionName = path.extname("C:\Users\slraj\Desktop\pepcoding\fjp6\module 2\node\childProcess.js");
let extensionName = path.extname("C:\Users\slraj\Desktop\pepcoding\fjp6\module 1\index.html");
//console.log(extensionName);

let baseName = path.basename("C:\Users\slraj\Desktop\pepcoding\fjp6\module 2\node\test.js");
console.log(baseName);

//console.log(__dirname);
//console.log(__filename);
let dirPath = __dirname;
//console.log(dirPath);

let neFilePath = path.join(dirPath,"test.js");
//console.log(neFilePath);