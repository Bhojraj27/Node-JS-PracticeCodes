const dbConnect =require('./mongodb');

dbConnect().then((res)=>{
    
    console.log(res.find({name:'nord'}).toArray().then((data)=>{
        console.log(data)
    }))
});

const main= async()=>{
    let data= await dbConnect();
    data=await data.find({name:'nord'}).toArray();
    console.warn(data);
}

main();
