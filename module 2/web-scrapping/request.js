const request = require("request");

request('http://www.google.com',function(error,response,body){
      if(error){
          console.log('error:',error);//Print the error if once occurred
        }
        else{
            console.log('body:',body);//Print the HTML for google homepage
        }   
});