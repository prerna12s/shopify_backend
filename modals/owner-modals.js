const mongoose=require('mongoose');


const ownerSchema=mongoose.Schema({   
    fullname:{
        type:String,
        required:true,
        minLength:3,
        trim:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },

    products:{
        type:Array,
        default:[]
    },

    contact:Number,
    gstin:String,
    picture:String,});

    module.exports=mongoose.model("owner",ownerSchema);