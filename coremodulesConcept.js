// those mdoule which are require to import are known as non gloabl module like file system where console is global module 

const fs = require("fs");

fs.writeFileSync("karthikDemo.txt","hy bro wassup sdfsd!!!") // non global module 

console.log(__dirname)
console.log(__filename)