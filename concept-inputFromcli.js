const fileSystemPackage = require("fs");
console.log("=====>",__filename);

console.log(process.argv) // process.argv is used for the getting the data from cli

process.argv.forEach(element => {
    console.log("###",element)
    // fileSystemPackage.writeFileSync("inputFromCli.txt",element)
});

var cliInput = process.argv;

fileSystemPackage.writeFileSync(cliInput[2],cliInput[3])

// fileSystemPackage.unlinkSync(file name);

/*
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
{
    console.log("invalid input ")
}

*/
// node index.js other red.txt 'this is color'