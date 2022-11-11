const fileSystemPackage = require('fs');
const pathPackage = require('path');
const dirPathName = pathPackage.join(__dirname,'dummyFiles')

console.log(dirPathName)

// for (let index = 0; index < 4; index++) {
//     fileSystemPackage.writeFileSync(dirPathName+'/dummyfile-'+index+'.txt',"this is file number ## "+index)
// }

fileSystemPackage.readdir(dirPathName,(err,insideFiles)=>{
    console.log('The files are ', insideFiles)

    insideFiles.forEach(function (element) {
        console.log(element);
    });

}); // read directory folder and get file name