var http = require('http');
var URL = process.argv[2];

http.get(URL, function(response){
  response.setEncoding('utf8');
  var dataPipe = [];
  response.on("data", function (data) {
    dataPipe.push( data );
  });
  response.on("end", function(){
    console.log(dataPipe.join("").length);
    console.log(dataPipe.join(""));
  });
  response.on("error",console.error);
});

// SOLUTION
// var bl = require('bl');
// http.get(URL, function(response) {
//   response.pipe(bl(function(err, data) {
//     if (err)
//       return console.error(err);
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }));
// });
