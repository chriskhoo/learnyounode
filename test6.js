var directory = process.argv[2];
var fileExt = process.argv[3];
var mymodule = require('./test6module');

// var callback = function(output){
//   console.log(output);
// };

var callback = function (err, list) {
  if (err){
    return console.error('There was an error:', err);
  }
  list.forEach(function (file) {
    console.log(file);
  });
};

mymodule(directory, fileExt, callback);
