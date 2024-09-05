const http = require('http');

http.createServer(function (req, res) {
    // Send the HTTP headers and body with status 200 (meaning success)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<html><body><h1>helo typescript!
        </h1>You asked for: ${req.url}</body&gt;</html>`);
}).listen(1234);