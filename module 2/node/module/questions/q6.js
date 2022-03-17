//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File
let fs = require("fs");
let path = require("path");
                                                              
let folderPath = path.join(__dirname,"..","unorganised");
// console.log(folderPath);
let content = fs.readdirSync(folderPath);
 console.log(content);
 let extArr = [];
 for(let i=0;i<content.length;i++){
     let name = content[i];
     console.log(name);
     let extName = path.extname(name);
     if(extName == ".jpg" || extName == ".png"){
         console.log("Image File");
     }else if(extName == ".mp3"){
        console.log("Audio File");
    }else if(extName == ".mp4"){
        console.log("Vidoe File");
    }else if(extName == ".zip"){
        console.log("Compressed File");
    }else if(extName == ".doc"){
        console.log("Read and Write Document File");
    }else if(extName == ".pdf"){
        console.log("Read only Document File");
    }

 }