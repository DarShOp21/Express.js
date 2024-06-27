const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json()); //supports framework and librabries
app.use(express.urlencoded({extended: true}));  //supports normal form

app.get('/', (req, res) => {
    res.render("index");
})

//handling GET request
// app.get('/check', (req, res) => {
//     res.send("Done");
//     console.log(req.query.name);        //if their is GET req than it should be req.query
//     console.log(req.query.email);       //if their is POST req tham it should be req.body
// })

//handling POST request
app.post('/check', (req, res) => {
    res.send("Done");
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
});

app.listen(3000);
