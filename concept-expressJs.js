// Express JS
/*
what is express js
install express js
Example with express js
IQ

it help to reduce the load time on developer for handiling the stuffs

easily for aPI , web pages  css integration etc

*/

const expressPackage = require('express');
const appSection     = expressPackage();

appSection.get('',(req,res)=>{
    res.send("Hey i am expressssssssssss")
    // http://localhost:8700/
});

appSection.get('/about',(req,res)=>{
    res.send("Hey i am expressssssssssss about ");
    // http: //localhost:8700/about
})

appSection.listen(8700);
