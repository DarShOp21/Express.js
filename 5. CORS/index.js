const express = require("express");
const cors = require("cors");    //require to share data
const app = express();

app.use(cors());     //writing this line will make the whole web to share data

app.get("/", (req, res) => {
    res.send("HEYYYYY")
})

app.get("/shareable", cors(), (req, res) => {   //this will make able to share data only from this route
    res.send("Shareable route..")
})

app.listen(3000);