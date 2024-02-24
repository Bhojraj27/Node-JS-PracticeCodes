const express=require('express');
require('./mongodb');
const Product = require('./product');

const app=express();

app.use(express.json());

app.get('/search/:key',async(req, res)=> {
    const data = await Product.find({ name: req.params.key });
    console.log(data);
    res.send(data);
})
   


app.listen(4000)














