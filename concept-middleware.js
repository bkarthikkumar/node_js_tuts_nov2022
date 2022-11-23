/*
Middleware 

what is middleware 
how to make middleware
apply middleware on routes
type of middleware 
*/

const express = require("express");
const newApp  = express();

const middleWareRequstFilter=(req,resp,next)=>{
    console.log("Middle ware");
    if(!req.query.age){
        resp.send("No age given");
    } else if(req.query.age < 15 ){
        resp.send("Not Allowed");
    } else {
        next();
    }
}

newApp.use(middleWareRequstFilter);
newApp.get('',(req,res)=>{
    res.send("Hey i am expressssssssssss")
    // http://localhost:8700/
});

newApp.listen(2094)

