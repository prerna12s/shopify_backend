const { text } = require('express');
const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    name:String,
    description:String,
    image:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:{
        type:String,
        default:"#fff",
    },
    panelcolor:{
        type:String,
        default:"#fff"
    },
    textcolor:{
        type:String,
        default:"#000"
    },
})
module.exports=mongoose.model("products",productSchema);