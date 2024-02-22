/**
 * Routing in node js:
 * client alwaya do request and server do response.
 */
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('Hello about me');
})

app.get('/help',(req,res)=>{
    res.send('Hello this is help!!');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})