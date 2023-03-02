const express=require('express');
const bodyparser=require('body-parser');
const app= express();
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
app.use(bodyparser.urlencoded({extended:false}));
app.use(adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
  res.status('404').send('<h1>PAGE NOT FOUND</h1>');
})

app.listen(3000);

