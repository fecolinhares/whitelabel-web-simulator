//server node.js simples
const http = require('http'),
      path = require('path'),
      fs = require('fs')

var staticBasePath = __dirname + '/demo';

const requestListener = function (req, res) {
    var resolvedBase = path.resolve(staticBasePath);
    var safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    var fileLoc = path.join(resolvedBase, safeSuffix);
    
    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            return res.end();
        }
        
        res.statusCode = 200;

        res.write(data);
        return res.end();
    });
}

const server = http.createServer(requestListener);
server.listen(8081);
console.log('Server online: http://localhost:8081')