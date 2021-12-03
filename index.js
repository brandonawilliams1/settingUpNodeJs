const http = require('http');
// const { hostname } = require('os'); simple server
// to load a file sytem us require('fs')
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => { 
    if(err){
        throw err;
    }

    const server = http.createServer((req, res) =>{
        res.statusCode = 200;
        // res.setHeader('Content-type', 'text/plain'); use to render plain text
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    
        server.listen(port, hostName, () =>{
        console.log('Server started on port ' + port);
        
    });
});

