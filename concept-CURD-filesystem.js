const fs = require('fs');
const path     = require('path');
const dirPath  = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is a simple file');


//  read file content 
/*
fs.readFile(filePath,'utf-8',(err,filedata)=>{
    console.log(filedata);     
    //without using utf-8 i get this as the output of the file 
    // <Buffer 74 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 66 69 6c 65>
});
*/

// update the content the file content 
/*
fs.appendFile(filePath,"\n newline new text\n",(err)=>{
    if(!err) console.log("file updated succesfully")
})
*/

// Rename of the file 
/*
fs.rename(filePath,`${dirPath}/curd-operation-withFileSystem.txt`, (err)=>{
    if(!err) console.log("File renamed")
});

*/
// Remove the file name from the folder

fs.unlinkSync(`${dirPath}/curd-operation-withFileSystem.txt`)


// // fs.readFile(filePath,'utf8',(err,item)=>{
// // console.log(item);
// // })
// // fs.appendFile(filePath,' for fruits',(err)=>{
// // if(!err) console.log("file is updated")
// // })
// // fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// // if(!err) console.log("file name is updated")
// // })

// // fs.unlinkSync(`${dirPath}/fruit.txt`);