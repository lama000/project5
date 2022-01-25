const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
    quote:{type:String, default:"You have no qoute"}
})
const User = mongoose.model('User', UserSchema)
module.exports= User