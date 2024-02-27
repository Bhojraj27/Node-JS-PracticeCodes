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

app.put('/:id', (req, res) => {
    const { name, pass, user_type, city } = req.body;
    const id = req.params.id;
  
    // Check if all required fields are present
    if (!name || !pass || !user_type || !city) {
        return res.status(400).send("Missing required fields");
    }
    const sql = "UPDATE users SET name=?, pass=?, user_type=?, city=? WHERE id=?";
    const values = [name, pass, user_type, city, id];
    mysqlCon.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error updating user:", err);
            return res.status(500).send("Error updating user");
        }
        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User updated successfully");
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM users WHERE id=?";
    const values = [id];
    mysqlCon.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error deleting user:", err);
            return res.status(500).send("Error deleting user");
        }
        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User deleted successfully");
    })
})

app.listen(3000);



