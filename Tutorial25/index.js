/**
 * Middleware: reqFilter is a application level middleware
 */
const express = require('express');
const app = express();

const reqFilter=(req,res,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        res.send('Please provide age')
    }
    else if(req.query.age<18){
        res.send('You are not eligible for access to this site.');
    }
    else{
        next();
    }
    
}

app.use(reqFilter);

app.get('/', (req, res)=>{
    res.send('Welcome to the Home');
})
app.get('/users',(req, res)=>{
    res.send('Welcome to Users Page');
});
app.listen(4000)