    var http = require('http');
    var dt = require('./test');
    http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the date is currerntly" + dt.myDatetime());
    res.end();
    }).listen(8040); 
    console.log('Server running at http://127.0.0.1:8040/');