const dbConnection = require('./mongodb');
// console.log(dbConnection());
// dbConnection().then((res)=>{
//     console.log(res.find().toArray().then((data)=>{
//         console.log(data)
//     }))
// });
 
const main= async()=>{
    let data= await dbConnection();
    data=await data.find().toArray();
    console.warn(data);
}

main();