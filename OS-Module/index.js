const os = require('os');
// console.log(os.arch())//64bit
console.log(os.freemem()/(1024*1024*102))//free memory
console.log(os.totalmem()/(1024*1024*102))//total memory
console.log(os.hostname())//hostname
console.log(os.platform())//platform win32
console.log(os.userInfo())//user info)