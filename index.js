var express = require('express');

var server = express();

// http://localhost:3000/
server.get('/', (request, response) => {
    response.send('Hello World!');
});

server.listen(3000);