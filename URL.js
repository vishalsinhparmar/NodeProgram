var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr,true);


console.log(q.host);
console.log(q.path);
console.log(q.search);

var qty = q.query;
console.log(qty);