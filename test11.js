var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLn = process.argv[3];

var server = http.createServer(function(req, res) {
  // request handling logic...
  // response.writeHead(200, { 'Content-Type': 'text/plain' });
  // response.write(fs.createReadStream(fileLn));
  fs.createReadStream(fileLn).pipe(res);
  // res.end();
  // why does this not need an end or a type?
  // pipe has a src and a des but what does it do? just move the data from 1 place to another? 
});


server.listen(port);
