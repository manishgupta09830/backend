const express=require('express');
const path=require('path');
const router=express.Router();

router.use('/addproduct',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','add-product.html'))
   
   
 })
 
 router.post('/product',(req,res,next)=>{
   
   console.log(req.body);
   res.redirect('/');
 })
 router.use('/success',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","success.html"))
 })

 

module.exports=router;