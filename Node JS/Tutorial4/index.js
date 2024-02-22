//basic server creation
const http=require('http');
//basic server creation without function as a parameter
http.createServer((req,res)=>{
    res.write('hello');
    res.end();
}).listen(4000)

// pass function as a parameter 
const datacontrol= (req,res)=>{
 res.write('hello buddy');
 res.end(); 
}
http.createServer(datacontrol).listen(4200)