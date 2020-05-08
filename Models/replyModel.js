const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const Joigoose = require('joigoose')(mongoose);
const Joi = require('@hapi/joi');



let replySchema = Joi.object({
    _id: Joi.number().positive(),
    replybody: Joi.string().required().max(255),
    user: {type: string,ref: 'User'}
  })
   
 let Reply = new Schema(Joigoose.convert(replySchema));
 mongoose.model('Reply',Reply );