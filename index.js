// '.mjs' file extension "A file with .mjs extension is a JavaScript source code file that is used as an ECMA Module (ECMAScript Module) in Node.js applications."

// Iƒ we rename the file 'index.mjs' and try with cli commond 'node index.js'

// It would be show error as 'require is not defined'
// to solve that

// import http from 'http'; instead of const http = require('http');
// or
// -- Named Import --

// import { createServer } from 'http';
// and call createServer(requestHandler); instead of http.createServer(requestHandler);

const http = require('http');
const port = 8000;
const fs = require('fs');

// request Handler function
function requestHandler(req, res) {
    console.log(req.url); 

    // setting the response
    // res.end('Gotcha');

    // setting the reponse as HTML text
    // res.writeHead(200, {'content-type' : 'text/html'});
    // res.end('<h1>Gotcha!</h1>');

    // setting the response as HTML file
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);
    });
}

// setting request handler on createServer 
const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Server is up and running on port: ", port);
});
