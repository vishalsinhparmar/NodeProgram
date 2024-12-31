var http = require('http');
var fs = require('fs');
var url = require('url');
// const { text } = require('stream/consumers');

http.createServer(function(req,res){
    var myurl = url.parse(req.url,true);
    var filename = "."+ myurl.pathname;
     fs.readFile(filename,function(err,data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
          }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
     })
}).listen(8030);

console.log("http://localhost:8030")