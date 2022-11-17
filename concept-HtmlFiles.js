const expressContainer = require('express');
const htmlApp    = expressContainer();  //executable function 
const pathModule = require("path");     //help in getting all the path

const publiPathValue = pathModule.join(__dirname,'publicFolder')
console.log(publiPathValue);

htmlApp.use(expressContainer.static(publiPathValue))  // "use" is the middleware , express js function
//static pages or contnet to rendered


htmlApp.listen(5500);
