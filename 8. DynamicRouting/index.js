const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send("about page");
})

app.get('/profile/:username', (req, res) => {
    let usr = req.params.username;
    res.send(`profile page of ${usr}`);
})

app.get('/profile/:username/:age', (req, res) => {
    let usr = req.params.username;
    let age = req.params.age;
    res.send(`profile page of ${usr} who is of ${age} years.`)
})

app.listen(3000)