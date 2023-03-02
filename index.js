const express = require('express')
const path=require('path');
const app = express()
const port = 3000;
// const manish=(req,res,next)=>{
//   console.log(req);         //we can make own middlewere
//   next();
// }
app.use(express.static(path.join(__dirname,"public")))
// app.use(manish);

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+req.params.name);//one or more parameters
})
app.get('/about', (req, res) => {
    // res.send('about')
    // res.sendFile(path.join(__dirname,'index.html'));
    // res.status(200);
    res.json({
        "manish":34,
    })
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})