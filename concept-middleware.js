/*
Middleware 

what is middleware 
how to make middleware
apply middleware on routes
type of middleware 
*/

const express                = require("express");
const newApp                 = express();
const middleWareRequstFilter = require('./custom-middlware')
const groupRoute             = express.Router();
// newApp.use(middleWareRequstFilter);



newApp.get('',(req,res)=>{
    res.send("Hey i am expressssssssssss")
});

newApp.get('/users',middleWareRequstFilter,(req,res)=>{
    res.send("Hey i am user page")
});

newApp.get('/test-users',middleWareRequstFilter,(req,res)=>{
    res.send("Hey i am test-user page")
});
groupRoute.use(middleWareRequstFilter);
groupRoute.get('/20',(req,res)=>{
    res.send("Hey i am test-user 20 page")
});

groupRoute.get('/30',(req,res)=>{
    res.send("Hey i am test-user 30 page")
});

newApp.use('/',groupRoute);

newApp.listen(2094)

