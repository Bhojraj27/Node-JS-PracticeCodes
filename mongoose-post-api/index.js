const express=require('express');
require('./mongodb');
const Product = require('./product');

const app=express();

app.use(express.json());

app.get('/products',async(req, res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send('Done');
});

app.get('/list',async(req, res)=>{
    let data= await Product.find();
    res.send(data);
   });

   app.delete('/delete/:_id',async(req, res)=>{
       let data = await Product.deleteOne(req.params);
       res.send('Done')
       console.log(data);
   });

   app.put('/update/:_id',async(req, res)=>{
       let data = await Product.updateOne(req.params, {$set: req.body});
       res.send('Done')
       console.log(data);
   });
   

app.listen(3000)














