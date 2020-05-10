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
           title:request.body.Title,
           msgbody:request.body.Msgbody,
         });
         msgObj.save()    
        .then((data)=>{
            response.redirect("list")
    
        })
        .catch((error)=>{
            console.log(error+"");
        })       
});




messageRouter.get("/edit/:id",(request,response)=>{
    messageModel.findById({_id:request.params.id})
    .then((data)=>{
        response.send(data);
    })
    
});

messageRouter.post("/edit/:id",(request,response)=>{
    messageModel.findOneAndUpdate({_id: request.params.id},{$set: request.body})
    .then((data)=>{
        response.send("done edit");
    })
    .catch((error)=>{
        console.log(error+"");
   })
 
});


messageRouter.get("/delete/:id",(request,response)=>{
    messageModel.remove({
        _id: request.params.id
    }, (err, result) => {
        response.send("Done");
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


messageRouter.delete("/deletereply/:id/:reply_id",(request,response)=>{
    
    messageModel.findById(request.params.id)
    .then((data)=>{
        let out = data.reply.map(reply => reply._id===request.params.reply_id)
        .indexOf(request.params.reply_id);
         data.reply.splice(out-1,1);
         data.save();
    })
    .catch((error)=>{

    })
   

});

module.exports=messageRouter;