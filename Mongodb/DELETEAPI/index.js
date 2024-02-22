const express = require('express');
const dbConnection = require('./mongodb');
const app = express();
app.use(express.json())
app.delete('/', async (req, res) => {
    // console.log(req.body)
    let db = await dbConnection();
    const collection = db.collection('users');
    data = await collection.deleteOne(
        {name:"rutvik patil"}
    );
    console.log(data);
    res.send('updated')

});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
