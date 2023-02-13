const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
    res.statusCode = 302
    res.setHeader('Content', 'blb')
    res.setHeader('loc', '/popo')
    res.end();
})

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));