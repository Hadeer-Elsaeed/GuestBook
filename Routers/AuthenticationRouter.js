const express = require("express");
let authRouter = express.Router();



require("./../Models/userModel");
let mongoose =require("mongoose");
let userModel =mongoose.model("User");



authRouter.get("/login",(request,response)=>{
    response.send("/login get");
});

authRouter.post("/login",(request,response)=>{
  
    response.send("in /login post");
    console.log("login post");
     
});


// Registeration Router
authRouter.get("/register",(request,response)=>{
    response.send("register get");
    
});

authRouter.post("/register",(request,response)=>{
    response.send("in /register post");
    console.log("register post");
   
    
});


//logout Router        
authRouter.get("/logout",(request,response)=>{
    response.send("in /logout");
    console.log("logout");
});
module.exports= authRouter;
