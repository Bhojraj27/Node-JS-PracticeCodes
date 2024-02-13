/**
 * Render the HTML and Json
 */

const express = require('express');
const app = express();
//internal linking for routing on page to another page
app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/about">About</a>`);
})

app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="Enter the username" value="${req.query.name}"/>
    <button type="submit">Submit</button>
    <a href="/">Go to Home Page</a>`);
})
//printing data in json format
app.get('/help', (req, res) => {
    res.send([
        {
            name: 'BHOJRAJ',
            age: 25,
            email: 'bhojraj@gmail.com'
        },
        {
            name: 'Rahul',
            age: 25,
            email: 'rahul@gmail.com'
        }
    ]);
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})