const dbConnection = require('./mongodb');

const deleteData =async()=>{
    try {
        const db = await dbConnection();
        const collection = db.collection('products');
        const result = await collection.deleteOne({ name: "note 9 pro " });
        console.log(result);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}
deleteData();