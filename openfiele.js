

var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.writeFile('mynewfile3.txt', 'vishlasin', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

              

