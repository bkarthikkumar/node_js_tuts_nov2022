module.exports = middleWareRequstFilter=(req,resp,next)=>{
    console.log("Middle ware");
    if(!req.query.age){
        resp.send("No age given");
    } else if(req.query.age < 15 ){
        resp.send("Not Allowed");
    } else {
        next();
    }
}