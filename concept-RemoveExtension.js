/* Points to be covered

Apply get method
Remove an Extension
Make 404 
Apply 404
*/

const expressContainer = require('express');
const htmlApp          = expressContainer();  //executable function 
const pathModule       = require("path");     //help in getting all the path

const publiPathValue = pathModule.join(__dirname,'publicFolder')
console.log(publiPathValue);

/* we will not be using static method for the removing of extensio*/
// htmlApp.use(expressContainer.static(publiPathValue))  

// "use" is the middleware , express js function
//static pages or contnet to rendered

htmlApp.get('/',(_,resp)=>{
    resp.sendFile(`${publiPathValue}/index.html`)
})
htmlApp.get('/about',(_,resp)=>{
    resp.sendFile(`${publiPathValue}/about.html`)
})
htmlApp.get('/home',(_,resp)=>{
    resp.sendFile(`${publiPathValue}/home.html`)
})
htmlApp.get('/junk',(_,resp)=>{
    resp.sendFile(`${publiPathValue}/about.html`)
})

htmlApp.get('*',(_,resp)=>{
    resp.sendFile(`${publiPathValue}/404.html`)
})



htmlApp.listen(5500);
