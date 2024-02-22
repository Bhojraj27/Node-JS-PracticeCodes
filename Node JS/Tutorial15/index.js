//AsynchronousProgramming
//Synchronus==> one task performed at a time in synchronous programming.
//AsynchronousProgramming==> Secon task do not wait for finish first task
let a=0;
let b=10;
setTimeout(()=>{
   b=20;
},2000);
console.log(a+b)