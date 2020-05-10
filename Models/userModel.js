const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const Joigoose = require('joigoose')(mongoose);
const Joi = require('@hapi/joi');
autoIncrement = require('mongoose-auto-increment');

let connection = mongoose.createConnection('mongodb://localhost:27017/GuestBook',{useNewUrlParser: true,
useUnifiedTopology: true  });
autoIncrement.initialize(connection);

var userSchema = Joi.object({
    _id: Joi.number().positive(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\d{3}\d{4}\d{4}$/).required(),
    birthyear: Joi.number().integer().min(1900).max(2013),
    photo: Joi.string().max(255),
    avatar: Joi.string()
  })
  
var User = new Schema(Joigoose.convert(userSchema));
 
User.plugin(autoIncrement.plugin, {
  model: 'User',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});
mongoose.model('User',User ); 