//How Node JS Works
//[callstack==>Node APIs==>CallbackQueue]::EventLoops
//callstack==> registry of functions calls
console.log('starting up');

setTimeout(()=>{
    console.log('two seconds')
},2000)
setTimeout(()=>{
    console.log('zero seconds')
},0)

console.log('ending up');
