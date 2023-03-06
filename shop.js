const express=require('express');
const path=require('path');
const fs=require('fs');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html')); 
    
  });
  router.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
   })
  module.exports=router;