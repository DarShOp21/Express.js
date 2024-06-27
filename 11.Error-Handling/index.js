const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    try{
        res.send(hey);
    } catch(err){
        next(err);
    }
})

app.get('/hey', (req, res) => {
    res.send("heyyyy......");
})

app.use((err, req, res, next) => {
    res.send("Internal server error");
    console.log(err.message);
})

app.listen(3000);