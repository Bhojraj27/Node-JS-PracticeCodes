const dbConnection = require('./mongodb');

const updateData = async () => {
    try {
        // Wait for the database connection
        const db = await dbConnection();
        const collection = await db.collection('products')
        // Update the data
        let result = await collection.updateOne(
            { name: "note 9 " },
            { $set: { name: "note 9 pro "  } }
        );

        console.log(result);
    } catch (error) {
        console.error("Error updating data:", error);
    }
}

updateData();
