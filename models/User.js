const mongoose = require("mongoose")

const userScehma = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:5,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    isActive:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model("User",userScehma)
