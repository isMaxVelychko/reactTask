const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile('tables.json', {root: "data"});
});

app.listen(3000);