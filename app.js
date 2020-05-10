let express = require('express');
let app = express();
let path=require('path');
let morgan = require('morgan');
let mongoose =require("mongoose");
let cors=require("cors");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();



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

//settings
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static((path.join (__dirname,"Views"))));
app.use(express.static((path.join (__dirname,"Public"))));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//Middleware
app.use(morgan("dev"));
app.use(authRouter);
app.use((request,response,next)=>{
    console.log("MW after login");
    next();    
   });
app.use("/messages",messageRouter);
