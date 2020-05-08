const express = require("express");
let messageRouter = express.Router();


require("./../Models/messageModel");
let mongoose =require("mongoose");
let messageModel =mongoose.model("Message");
 

//list "get"
messageRouter.get("/list",(request,response)=>{
    response.send("list");

});
//add "get"
messageRouter.get("/add",(request,response)=>{
    response.send("get add");
   
});
//add "post"
messageRouter.post("/add",(request,response)=>{
    console.log(request.body);

    var msgObj = new messageModel({
           title:request.body.title,
           msgbody:request.body.body,
        //    user:request.session.name,
           reply:request.body.reply
         });
         msgObj.save()    
        .then((data)=>{
            // response.redirect("list")
            response.send("msg added");
    
        })
        .catch((error)=>{
            console.log(error+"");
        })
    // response.send("post add");
       
});
// edit "get"
messageRouter.get("/edit/:id",(request,response)=>{
    response.send(" get edit ");
    });
//edit "post"
messageRouter.post("/edit",(request,response)=>{
    response.send("post edit");

});
//"delete"
messageRouter.get("/delete/:id",(request,response)=>{
    response.send("delete");
});

module.exports=messageRouter;