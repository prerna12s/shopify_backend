const express=require('express');
const userModel = require('../models/user-model');

const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Owner Home Page');
});

// CREATE OWNER
router.post('/create',async (req,res)=>{
   //create an owner
   //first check in db if it exist
   let owners=await userModel.find();
   if(owners.length>0){
    res.status(503).end('You are not authorized for this operation');

   }
   let { fullname, email, password, contact, gstin } = req.body;
   let createduser = await userModel.create({
     fullname: fullname,
    email: email,
    password: password,
    contact: contact,
    gstin: gstin
   })
   res.status(201).json({
    message: 'Owner created successfully',
    owner:createduser
   })


})

//DELETE OWNER


module.exports=router;

