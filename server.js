const http = require('http');


const server = http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'text/html');

    resp.write('<h1>Hello NodeJs</h1>');
    resp.write('<p>Hi There</p>')

    resp.end();
})

server.listen(3000, 'localhost', () => {
    console.log('server listen on port 3000')
})
