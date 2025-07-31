const express=require('express');

const router=express.Router();
const userModel= require('../models/user-model');

router.get('/',(req,res)=>{
    res.send('User Home Page');
});

module.exports=router;

//REGISTERING A USER
router.post('/register',async(req,res)=>{
    //iniiitialy itna hi info lenge require vaali
    let  { fullname, email, password } = req.body;
     try{
          let existingUser =await userModel.findOne({
            fullname, 
            email,
             password
          });
          if(existingUser){
            // User already registered
            return res.status(409).json({error:"User already exists"});
          }
          newUser=await userModel.create({ fullname, email, password });
          res.status(201).json({
            message: "User registered successfully",
            createdUser: newUser
          })
         
     }
     catch (error) {
         res.status(500).send('Something went wrong on our end');
     }

});

//LOGIN A USER
router.post('/login',async(req,res)=>{
    let { email, password } = req.body;
    try{
        

    }
    catch (error) {
        res.status(500).send('Something went wrong on our end');
    }
})