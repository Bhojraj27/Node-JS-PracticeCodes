const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const database = 'Ecomm';
const client = new MongoClient(url);

async function dbConnection() {
    try {
        await client.connect();
        const db = client.db(database);
        return db; // Return the database object
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Rethrow the error to handle it outside of this function
    }
}

module.exports = dbConnection;
