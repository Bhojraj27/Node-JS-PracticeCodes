const mysqlCon = require('./config');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    mysqlCon.query("select * from users", (err, result) => {
        if (err) { res.send("error"); }
        else { res.send(result); }
    });
})

app.post('/users', (req, res) => {
    mysqlCon.query("insert into users set?", req.body, (err, result) => {
        if (err) { res.send("error"); }
        else { res.send(result); }
    });
})
app.listen(3000);



