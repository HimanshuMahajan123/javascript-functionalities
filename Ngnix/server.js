const http = require('http')
const fs = require('fs')
const path = require('path');

const port = 3000;

const server = http.createServer((request, response) => {

    //request.url === '/'  >>  serve index.html file
    const filePath = path.join(__dirname, request.url === '/' ? "index.html" : request.url)

    const extName = String(path.extname(filePath)).toLowerCase();

    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/js',
        '.png': 'text/png'
    }

    const contentType = mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {

        if (err) {
            if (err.code === 'ENOENT') {
                response.writeHead(404, { "Content-Type": "text/html" })
                response.end("404 : File not found BRO")
            }
        }
        else {
            response.writeHead(200, { "Content-Type": contentType });
            response.end(content, "utf-8");
        }
    })
});

server.listen(3000, () => {
    console.log(`server is listening on port ${port}`);
})