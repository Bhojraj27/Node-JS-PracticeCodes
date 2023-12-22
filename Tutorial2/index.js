//use variable from other file
const app=require('./app'); 
const arr=[1,2,3,4,5,5,6];
console.log(app.z()) //calling functions from other file 
//for iterating array
arr.filter((item)=>{
    console.log(item)
  })  
  /// for finding specific not
  let result = arr.filter((item)=>{
    return item===5
  })
  console.log(result)