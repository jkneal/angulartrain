var express = require('express');

var app = express();

app.use(express.static('./client'));

require('./products-controller.js')(app);

app.listen(3000);
console.log('server listening on port 3000');