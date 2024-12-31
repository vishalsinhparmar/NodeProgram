var fs = require('fs');

fs.appendFile('mynewfile2.txt','hello world',function(err){
    try{
       if (err){
              throw new Error('failed to save file '+err.message);

       }
       console.log("saved me");
    } catch (error){
        console.error('an error occured:',error.message);
    }
})