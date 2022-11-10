// bsic server setup 

const httpServer = require('http');

function multiply() {
    return "5";
}


httpServer.createServer((req,resp)=>{
    resp.write("<h1>hello karthik!!!! this is from basic server</h1>")
    resp.write(multiply());
    resp.end();
}).listen(2020);