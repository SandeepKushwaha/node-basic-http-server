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
    // res.writeHead(200, { 'content-type': 'text/html' });
    // fs.readFile('./index.html', function (err, data) {
    //     if (err) {
    //         console.log('error', err);
    //         return res.end('<h1>Error!</h1>');
    //     }

    //     return res.end(data);
    // });

    // install nodemon (npm install -g nodemon) and
    // start the server with (nodemon index.js) for
    // auto change js and restart the server.
    // NOTE: nodemon watches only file with extension: js, mjs, json

    // Extending to multiple Pages
    res.writeHead(200, { 'content-type': 'text/html' });
    let filePath;
    switch (req.url) {
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
            break;
    }

    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log('error:', err);
            res.end('<h1>Error!</h1>');
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

    // console.log("Server is up and running on port: ", port);
    console.log("Server is running on port:", port);
});
