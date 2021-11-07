const fs = require('fs');
fs.writeFileSync('text.txt','hi my name is saleh');
fs.copyFileSync('text.txt','textCopy');
fs.renameSync('text.txt','originalTxt');
let listNames=fs.readdirSync("./");
console.log(listNames);
fs.appendFileSync('originalTxt',' and im from yanouh');