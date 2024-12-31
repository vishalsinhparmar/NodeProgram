const fs = require('fs');
// const data = fs.readFileSync('input.txt');

// console.log(data.toString());
fs.readFile('input.txt',function(err,data){
    if (err) return console.error(err);
    console.log(data.toString());
});


for (let i=0;i<=5;i++){
    console.log('the number is'+i);
}