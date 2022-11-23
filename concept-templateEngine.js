/*
Points to be covered

What is tempalte engine
install ejs Template Package
Dynamic Routing 
Dynamic Pages
*/

/*
another video topic 
Dynamic PAges
How to make loop in ejs
make header file 
include in all pages 
*/

const expressContainer = require('express');
const htmlApp          = expressContainer();  //executable function 
const pathModule       = require("path");     //help in getting all the path

const publiPathValue = pathModule.join(__dirname,'publicFolder')
console.log(publiPathValue);

// to set the template engine for node js after this we need to create a views folder for the same purpose

htmlApp.set('view engine','ejs')

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

htmlApp.get('/profile',(_,resp)=>{
    const user = {
        name         : "Balasundaram Karthik Kumar",
        email        : "test@test.com",
        contactNumber: +919874563254,
        skills       : ['php','nodeJs','html','css']
    }

    resp.render("profile",{user}) //syntax for ejs template enginge
});

htmlApp.get ('/loginUser',(_,resp)=>{
    resp.render("login")
});

htmlApp.get('*',(_,resp)=>{
    resp.sendFile(`${publiPathValue}/404.html`)
})



htmlApp.listen(5500);
