const express=require('express');
const router=express.Router();
router.use('/addproduct',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="number" name="number"><input type="text" name="title"><button type="submit">add product</button></form>');
   
 })
 router.post('/product',(req,res,next)=>{
   
   console.log(req.body);
   res.redirect('/');
 })

module.exports=router;