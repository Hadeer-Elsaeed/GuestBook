const express = require("express");
let authRouter = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');



require("./../Models/userModel");
let mongoose =require("mongoose");
let userModel =mongoose.model("User");



authRouter.get("/login",(request,response)=>{
    response.send("/login get");
});

authRouter.post("/login",async (request,response)=>{

  try {
        let user = await userModel.findOne({email:request.body.Email})
        if (!user){
            console.log("There is no account with this email");
        }
        const isMatch = await bcrypt.compare(request.body.Password,user.password);
        if(isMatch)
        {
            response.send("/profile");
        }
        else{
            response.send("/login");
            console.log("Invalid Password")
        }
  
 } catch (err){
      console.error(err.message);
  }
});


// Registeration Router
authRouter.get("/register",(request,response)=>{
    response.send("register get");
    
});

authRouter.post("/register",async (request,response)=>{
    console.log(request.body);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(request.body.Password, salt); 
    const email = request.body.Email;
    const avatar = gravatar.url(email, {s: '200', r: 'pg', d: 'mm'});
   
    try {
        var userObj = new userModel({
            _id: request.body._id,
            username: request.body.userName,
            password,
            email,
            phone: request.body.Phone,
            birthyear: request.body.Birthyear,
            // photo :request.body.photo
            avatar
        });
        await userObj.save();


    } catch (err){
        console.error(err.message);
    }

   
    
});


//logout Router        
authRouter.get("/logout",(request,response)=>{
    response.send("in /logout");
    console.log("logout");
});
module.exports= authRouter;
