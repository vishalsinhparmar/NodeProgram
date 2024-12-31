// const { readlink } = require('fs')

const readFile =  require('readline').createInterface({
    input:process.stdin,
    output:process.stdout 
});

readFile.question('what is your name',name=>{
    console.log(`hii${name}!`);
    readFile.close();
})

