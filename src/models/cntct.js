const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

//collection

const User = new mongoose.model("Usersdata", userSchema);

module.exports = User