var http = require('http');
var u = import {}  from 'upper-case'

http.createServer((req,res) =>{
      res.writeHead(200,{'Content-text':'text/html'});
      res.write(u.upperCase("hello word"))
      res.end()
}).listen(8090);
console.log("http://localhost:8090");