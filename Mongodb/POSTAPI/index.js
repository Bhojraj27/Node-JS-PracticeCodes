const express = require('express');
const dbConnection = require('./mongodb');
const app = express();
app.use(express.json())
app.post('/', async (req, res) => {
    // console.log(req.body)
    let db = await dbConnection();
    const collection = db.collection('users');
    data = await collection.insertOne(req.body);
    console.log(data);
    res.send(req.body)

});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
