const express = require("express");
let messageRouter = express.Router();


require("./../Models/messageModel");
require("./../Models/userModel");

let mongoose =require("mongoose");
let messageModel =mongoose.model("Message");
let userModel =mongoose.model("User");

 /*-------------------------------------------------*/ 

messageRouter.get("/list",(request,response)=>{
    messageModel.find({})
        .then((data)=>{
            response.send(data);
        })
        .catch((error)=>{
            console.log(error+"");
        })
});



messageRouter.get("/add",(request,response)=>{
    response.send("get add");
   
});

messageRouter.post("/add",(request,response)=>{
    // console.log(request.body);
    var msgObj = new messageModel({
           title:request.body.title,
           msgbody:request.body.msgbody,
         });
         msgObj.save()    
        .then((data)=>{
            response.redirect("list")
    
        })
        .catch((error)=>{
            console.log(error+"");
        })       
});

messageRouter.post("/addreply/:id",(request,response)=>{
     messageModel.findById(request.params.id)
    .then((data)=>{
        console.log(data.reply);
        var txt = {
            replymsg: request.body.replymsg,
            user: request.body.username
        }
        data.reply.unshift(txt);
        data.save()

    })
    .catch((error)=>{
        console.log(error+"");
    })
     
});



messageRouter.get("/edit/:id",(request,response)=>{
    
});

messageRouter.post("/edit",(request,response)=>{
    response.send("post edit");

});


messageRouter.get("/delete/:id",(request,response)=>{
    messageModel.deleteOne({_id:request.params._id})
    .then((data)=>{
        response.send("Done");
    })
    .catch((error)=>{
        console.log(error+"");
    })
});
module.exports=messageRouter;