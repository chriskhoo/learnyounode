var http = require('http');
var URL = process.argv[2];

http.get(URL, function(response){
  response.setEncoding('utf8');
  response.on("data", function (data) {
    console.log(data);
  });
  //OR
  // response.on('data', console.log);  
  response.on("error",console.error);
// response.on("end", function (end) {
// /* ... */
// });

});

//"utf8",
