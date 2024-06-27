const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("working");
})

app.post("/", (req, res) => {
    res.send("working");
})

app.put("/", (req, res) => {
    res.send("working");
})

app.delete("/", (req, res) => {
    res.send("working");
})

app.patch("/", (req, res) => {
    res.send("working");
})

app.listen("3000" , () => {
    console.log(`running on localhost 3000`)
})