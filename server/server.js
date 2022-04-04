const express = require('express');

const app = new express();

app.get('/user/getList', function (req, res) {
    res.cookie('userName', 'lgh', {path: './home'}).json([
        {
            name: 'tom1',
            age: 12
        },
        {
            name: 'tom2',
            age: 13
        },
        {
            name: 'tom3',
            age: 14
        }
    ]);
})

app.listen(3001);
console.log('server starting...');