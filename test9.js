var http = require('http');
var counter = 0;
var URL = [];
var dataPipe = [];

var mainFn = function(URLi, dataPipei){
  http.get(URLi, function(response){
    response.setEncoding('utf8');
    response.on("data", function (data) {
      dataPipei.push( data );
    });
    response.on("end", function(){
      counter++;
      if(counter == 3) {
        console.log(dataPipe[0].join(""));
        console.log(dataPipe[1].join(""));
        console.log(dataPipe[2].join(""));
      }
    });
    response.on("error",console.error);
  });
};

for(var i=0; i<3; i++){
  URL[i] = process.argv[2+i];
  dataPipe[i] = [];
  mainFn(URL[i],dataPipe[i]);
}


// var results = [];
// http.get(URL1, function(response){
//   response.setEncoding('utf8');
//   var dataPipe = [];
//   response.on("data", function (data) {
//     dataPipe.push( data );
//   });
//   response.on("end", function(){
//     results[0] = dataPipe.join("");
//     counter ++;
//     if (counter == 3){
//       console.log(results[0]);
//       console.log(results[1]);
//       console.log(results[2]);
//     }
//   });
//   response.on("error",console.error);
// });
//
// http.get(URL2, function(response){
//   response.setEncoding('utf8');
//   var dataPipe = [];
//   response.on("data", function (data) {
//     dataPipe.push( data );
//   });
//   response.on("end", function(){
//     results[1] = dataPipe.join("");
//     counter ++;
//     if (counter == 3){
//       console.log(results[0]);
//       console.log(results[1]);
//       console.log(results[2]);
//     }
//   });
//   response.on("error",console.error);
// });
//
// http.get(URL3, function(response){
//   response.setEncoding('utf8');
//   var dataPipe = [];
//   response.on("data", function (data) {
//     dataPipe.push( data );
//   });
//   response.on("end", function(){
//     results[2] = dataPipe.join("");
//     counter ++;
//     if (counter == 3){
//       console.log(results[0]);
//       console.log(results[1]);
//       console.log(results[2]);
//     }
//   });
//   response.on("error",console.error);
// });
