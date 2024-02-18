const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database='Ecomm';
const client= new MongoClient(url);
 
async function dbConnection (){

       let result= await client.connect();
       db=result.db(database);
      return db.collection('users');
        // const data=await collection.find({}).toArray();
        // console.log(data);

}

module.exports = dbConnection