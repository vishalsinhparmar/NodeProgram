var fs = require('fs');

fs.appendFile("mynewfile.txt",'hello world',function()
{
     
      console.log("savedme!")
})
