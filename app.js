let express = require('express');
let app = express();
let path=require('path');


/*------------------------------------------------*/
//connect to server nodejs
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`app starting listen to post  ${port}....`)
});
