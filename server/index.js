const express = require('express');
const app = express();

const initialData = {
    tables: [
        {
            name: 'Foo table from server',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
        {
            name: 'Bar table from server',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
        {
            name: 'Baz table from server',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
        {
            name: 'Qux table from server',
            participants: [
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
            ],
        },
    ]
};

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*").send(initialData);
});

app.listen(3000, function () {
    console.log('express server is running!');
});