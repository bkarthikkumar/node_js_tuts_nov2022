const httpServerPackage = require('http');
const apiStaticData = require('./apiData');

httpServerPackage.createServer((req ,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(apiStaticData));
    res.end();
}).listen(1994);