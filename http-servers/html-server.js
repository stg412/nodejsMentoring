const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
    const file = fs.readFileSync('./index.html', 'utf8');
    const message = file.replace(/{message}/, 'Hello World!');
    res.writeHead(200, {'Content-Type': 'text/html, charset=utf8'});
    res.end(message);

    fs.createReadStream('./index.html').pipe(res);

}).listen(port, console.log(`Server started on port: ${port}`));