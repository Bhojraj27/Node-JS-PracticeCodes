/**
 * Middleware: is a application level middleware
 */
const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();
route.use(reqFilter);
app.get('/', (req, res)=>{
    res.send('Welcome to the Home');
})
app.get('/users',(req, res)=>{
    res.send('Welcome to Users Page');
});

route.get('/about',(req, res)=>{
    res.send('Welcome to About Page');

});
route.get('/contact',(req, res)=>{
    res.send('Welcome to contact Page');

});

app.use('/',route);

app.listen(4000)