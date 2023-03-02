const express=require('express');
const bodyparser=require('body-parser');
const app= express();
app.use(bodyparser.urlencoded({extended:false}));


app.use('/addproduct',(req,res,next)=>{
   res.send('<form action="/product" method="POST"><input type="number" name="number"><input type="text" name="title"><button type="submit">add product</button></form>');
  
})
app.use('/product',(req,res,next)=>{
  
  console.log(req.body);
  res.redirect('/');
})
app.use('/',(req,res,next)=>{
  res.send('<h1>hello from express</h1>');
  

  
})
app.listen(3000);

