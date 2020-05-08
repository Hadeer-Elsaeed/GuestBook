const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const Joigoose = require('joigoose')(mongoose);
const Joi = require('@hapi/joi');


var userSchema = Joi.object({
    _id: Joi.number().positive(),
    username: Joi.string().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\d{3}\d{4}\d{4}$/).required(),
    birthyear: Joi.number().integer().min(1900).max(2013),
    photo: Joi.string().max(255),
    avatar: Joi.string()
  })
  
var User = new Schema(Joigoose.convert(userSchema))
mongoose.model('User',User ); 