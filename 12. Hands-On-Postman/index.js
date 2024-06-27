const express = require("express")

const app = express();
let data = [1,2,3,4]

app.get('/' , (req, res) => {
    res.send("Heyyyy")
});

app.get('/data', (req, res) => {
    res.send(data);
})

app.post('/data/:num', (req, res) => {
    let number = parseInt(req.params.num);
    data.push(number);
    res.send(data);
})

app.listen('3000');