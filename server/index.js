const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*").sendFile('tables.json', {root: "data"});
});

app.listen(3000, function () {
    console.log('express server is running!');
});