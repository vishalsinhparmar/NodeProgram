var fs = require('fs');
fs.rename("mynewfile.txt","myfirstNewfile.txt" ,function(err){
    if(err) throw err
    console.log("write");
})

