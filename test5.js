var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2], function(err, list){
  list.forEach(function(entry){
    if(path.extname(entry) == "."+process.argv[3]){
      console.log(entry);
    }
  });
});
