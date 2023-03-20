const mongoose=require('mongoose');
const newSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }

});
const User=mongoose.model('User',newSchema);
module.exports=User;