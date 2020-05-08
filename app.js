let express = require('express');
let app = express();
let path=require('path');
let morgan = require('morgan');


let authRouter = require('./Routers/AuthenticationRouter');
let messageRouter = require('./Routers/MessageRouter');

/*------------------------------------------------*/
//connect to server nodejs
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`app starting listen to post  ${port}....`)
});
//connect to mongoose db
mongoose.connect('mongodb://localhost:27017/GuestBook',{useNewUrlParser: true,
useUnifiedTopology: true  })

    .then((data)=>{
        console.log("connection sucess");
    })
    .catch((err)=>{
        console.log(err +"this is error");

    })

/* --------------------------------------- */


//Middleware
app.use(morgan("dev"));

app.use(authRouter);
app.use("/messages",messageRouter);
