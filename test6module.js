// module.exports = function(directory,fileExt, callback){
//   var fs = require('fs');
//   var path = require('path');
//
//   fs.readdir(directory, function(err, list){
//     if(err){
//       return callback(err);
//     }
//     else{
//       list.forEach(function(entry){
//         if(path.extname(entry) == "."+fileExt){
//           return callback(entry);
//         }
//       });
//     }
// });
// };

module.exports = function(directory,fileExt, callback){
  var fs = require('fs');
  var path = require('path');

  fs.readdir(directory, function(err, list){
    if(err){
      return callback(err);
    }
    else{
      list = list.filter(function (file) {
      return path.extname(file) === '.' + fileExt;
      });
      callback(null, list);
    }
});
};
