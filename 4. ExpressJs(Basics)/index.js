const express = require('express');
const session = require('express-session');  // middleware for managing sessions
const flash = require('connect-flash');  // use to create data which can be used on other routes
const app = express()

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'anything'  // secret key for session encryption
}))

app.use(flash());

app.use((req, res, next) => {
    console.log("IN THE MIDDLEWARE.........");
    next();
})

// '/' route
app.get('/', (req, res) => {  
    req.flash("error", "Invalid credentials");  // store flash message
    res.send("Hellooo......");
})

// '/error' route
app.get('/error', (req, res) => {
    let message = req.flash('error');  // retrieve flash message
    res.send(message)
})

// '/about' route
app.get('/about', (req, res) => {
    res.send("About Page");
})

// route for all other requests, it will respond for all other requests, therefore it's in the last position of the code
app.get('*', (req, res) => {
    res.send("No such page found..");
})

// start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
