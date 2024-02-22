/**Html Pages Load  */
const express = require('express');
const path = require('path');//used to access folders
const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));//loades static methos and contents

app.listen(5000);