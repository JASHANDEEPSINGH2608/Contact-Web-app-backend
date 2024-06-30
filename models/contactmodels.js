const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")
const contactschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },

},
{       timestamps:true

});

module.exports=mongoose.model("Contact",contactschema)