const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');

const app= express();
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminroutes);

app.use(shoproutes);

app.use((req,res,next)=>{
  res.status('404').sendFile(path.join(__dirname,'views','notfound.html'));
})


app.listen(3000);

