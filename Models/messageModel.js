const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const Joigoose = require('joigoose')(mongoose);
const Joi = require('@hapi/joi');
autoIncrement = require('mongoose-auto-increment');


let connection = mongoose.createConnection('mongodb://localhost:27017/GuestBook',{useNewUrlParser: true,
useUnifiedTopology: true  });
autoIncrement.initialize(connection);

let messageSchema = Joi.object({
    _id: Joi.number().positive(),
    title: Joi.string().max(255),
    msgbody: Joi.string().required().max(255),
    reply: Joi.array().
    items({
      replymsg: Joi.string(),
      user: Joi.string().meta({
        _mongoose: {  ref: "User" }
      })
    })
  
  })
   
 let Message = new Schema(Joigoose.convert(messageSchema));
 
Message.plugin(autoIncrement.plugin, {
    model: 'Message',
    field: '_id',
    startAt: 1,
    incrementBy: 1
  });

mongoose.model('Message',Message );

