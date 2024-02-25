//Events and Event Emitter in Node.js
//eventEmitter is used to emit events\
const express= require('express');
const EventEmitter = require('events');
const app = express(); 
const event= new EventEmitter();
let count=0;
event.on('countaPI',()=>{
    count++;
    console.log('event called' + count);
})
app.get('/',(req,res)=>{
    res.send('home api called');
    event.emit('countaPI');
})
app.get('/search',(req, res)=>{
    res.send('search api called');
    event.emit('countaPI');
})
app.get('/update',(req, res)=>{
    res.send('update api called');
    event.emit('countaPI');
})
app.listen(4000)