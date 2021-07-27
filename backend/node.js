
const http = require('http');
const url = require('url');
const fs = require('fs'); 

const server = http.createServer((req, res) => {
   

    let {query} = url.parse(req.url, true);
    console.log( query.str)


    fs.writeFile('../src/test.vue', query.str , function(err) {
        if (err) {
            throw err;
        }
        console.log('OK');

    });
   
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('hello world');
})


console.log('1121')


server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(8088) 


