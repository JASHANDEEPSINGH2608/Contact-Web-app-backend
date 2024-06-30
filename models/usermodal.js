const { Timestamp } = require("mongodb")
const { default: mongoose } = require("mongoose")
const moongose=require("mongoose")
const userschema=moongose.Schema({
    username:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Userdeatil",userschema)