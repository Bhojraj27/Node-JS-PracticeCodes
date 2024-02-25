const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
})

connection.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    console.log(result);
})

connection.end();