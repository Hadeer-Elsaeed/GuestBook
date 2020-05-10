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

            response.json("/profile");
            console.log("you are login ...")
        }
        else{
            response.redirect("/login");
            console.log("Invalid Password")

        }
  
 } catch (err){
      console.error(err.message);
  }
});


// Registeration Router
authRouter.get("/register",(request,response)=>{
    response.send("register get");
    console.log("get register");
    
});

authRouter.post("/register", (request, response) =>{

    console.log(request.body);
    const email = request.body.Email;
    const avatar = gravatar.url(email, {s: '200', r: 'pg', d: 'mm'});
    bcrypt.hash(request.body.Password, 10, (err, encrypted) => {
    request.body.Password = encrypted;

    var userObj = new userModel({
        // _id: request.body._id,
        username: request.body.Username,
        password: request.body.Password,
        email,
        phone: request.body.Phone,
        birthyear: request.body.Birthyear,
        avatar
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

})
});

  
 

//logout Router        
authRouter.get("/logout",(request,response)=>{
    response.redirect("/login");

});
module.exports= authRouter;
