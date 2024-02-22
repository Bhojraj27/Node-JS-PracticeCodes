const express = require('express');
const dbConnection = require('./mongodb');
const app = express();

app.get('/', async (req, res) => {
    let db = await dbConnection();
    const collection = db.collection('products');
    const data = await collection.find().toArray();
    res.send(data);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
