const mongoose =require('mongoose');

const userSchema=mongoose.Schema({

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

    cart:{
        type:Array,
        default:[]
    },
    // isadmin:{
    //     type:Boolean,
    //     default:false
    // },
    orders:{
        type:Array,
        default:[]
    },

    contact:Number,
    picture:String,
})

module.exports=mongoose.model("user",userSchema);