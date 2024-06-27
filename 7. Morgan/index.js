const express = require('express');
const morgan = require('morgan');

const app = express();

// app.use(morgan('dev'));   //GET / 200 7.269 ms - 3
// app.use(morgan('short'));   //::1 - GET / HTTP/1.1 304 - - 6.636 ms
// app.use(morgan('combined'));  //::1 - - [22/Jun/2024:05:26:45 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
// app.use(morgan('common')); //::1 - - [22/Jun/2024:05:27:58 +0000] "GET / HTTP/1.1" 304 -
// app.use(morgan('tiny')); //GET / 304 - - 6.040 ms

app.get('/', (req, res) => {
    res.send("Hey");
});

app.listen(3000);