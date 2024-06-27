const express = require("express");
const cookieParser = require('cookie-parser');   //use to parse(fetch) cookies
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("heloo");
})

app.get('/check', (req, res) => {
    console.log(req.cookies.name); //log the value of name which is saved in the cookie
    res.send("checking...");
})

app.get('/banned', (req, res) => {
    res.cookie("name", "darsh");  //will save value of 'name' as 'darsh' in the cookie
    res.send("banned");
})

app.listen(3000);