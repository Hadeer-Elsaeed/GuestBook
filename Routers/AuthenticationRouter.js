const express = require("express");
let authRouter = express.Router();



require("./../Models/userModel");
let mongoose =require("mongoose");
let userModel =mongoose.model("User");



authRouter.get("/login",(request,response)=>{
    response.send("/login get");
});

authRouter.post("/login",(request,response)=>{
  
    userModel.findOne({ $and:[{username:request.body.userName},{password:request.body.Password}]})
    .then((data)=>{
        console.log(data);
        if(data !=null)
        {
            // request.session.userName = request.body.username;
             response.send("/profile");
           }
           else{
            response.send("/login");
           }
         }
    )
    .catch((error)=>{
        response.send("/login");
        console.log(error+"you must register");
        
    })

     
});


// Registeration Router
authRouter.get("/register",(request,response)=>{
    response.send("register get");
    
});

authRouter.post("/register",(request,response)=>{
    console.log(request.body);
    var userObj = new userModel({
        _id: request.body._id,
        username: request.body.userName,
        password: request.body.Password,
        email: request.body.Email,
        phone: request.body.Phone,
        birthyear: request.body.Birthyear,
        // photo :request.body.photo
    
    }).save()
    .then((data)=>{
        response.send("authorization/login");
        console.log("success registration");

    })
    .catch((error)=>{
        response.send("authorization/registration");
        console.log("error in registration")
        console.log(error+"");
    })
   
    
});


//logout Router        
authRouter.get("/logout",(request,response)=>{
    response.send("in /logout");
    console.log("logout");
});
module.exports= authRouter;
