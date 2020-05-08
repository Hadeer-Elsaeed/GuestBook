const express = require("express");
let messageRouter = express.Router();


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
    response.send("post add");
       
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