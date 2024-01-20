const http = require('http');

const fs = require('fs');

const port = 8000;

function requestHandler(req, res) {
    console.log(req.url);

    res.writeHead(200, { 'Content-type': 'JSON' });

    let filepath;

    switch (req.url) {
        case '/':
            filepath = './index.html'
            break;
        case '/profile':
            filepath = './profile.html'
            break;
        default:
            filepath = './404.html'
    }

    fs.readFile(filepath, function (err, data) {
        if (err) {
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log("Error");
        return;
    }

    console.log("Server is running at port: ", port);
});