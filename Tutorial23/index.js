/**
 * Template Engine: Used For making Dynamic Pages.
 * ejs: template package
 */

const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));
app.set('view engine','ejs')
app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/profile', (_, res) => {
    const user={
        name:'BHOJRAJ',
        age:25,
        country: 'US',
        email: 'bhojrajchavan5@gmail.com',
        skill:['Java','C','React JS','Node JS','Node JS'] 
    } 
    res.render('profile',{user});
})
app.get('/Login',(_,res)=>{
    res.render('Login');
})
app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/404Page.html`);
})
app.listen(5000);