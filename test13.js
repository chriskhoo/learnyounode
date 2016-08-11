var http = require('http');
var port = process.argv[2];
var url = require('url');

// url.parse(request.url, true)

// var server = http.createServer(function(req, res) {
//   if (req.method == 'GET') {
//   response.writeHead(200, { 'Content-Type': 'application/json' });
//   }
// });


var server = http.createServer(function(req, res) {
  if (req.method == 'GET') {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var urlobj = url.parse(req.url, true);
  // console.log(urlobj);
  var isoTime = urlobj.query.iso;
  var dateTime = new Date(isoTime);
  // console.log(isoTime);
    if( urlobj.pathname == "/api/parsetime" ) {
      console.log(dateTime);
      res.end( JSON.stringify({
       "hour": dateTime.getHours(),
       "minute": dateTime.getMinutes(),
       "second": dateTime.getSeconds()
     }));
    }

    else if (urlobj.pathname == "/api/unixtime") {
      console.log(dateTime);
      res.end( JSON.stringify({
       "unixtime": dateTime.getTime()
     }));
    }

    else{
      res.end(JSON.stringify({"error": "invalid request"}));
    }


  }
  else {
    res.end(JSON.stringify({"error": "not a GET request"}));
  }
});


server.listen(port);
