var net = require('net');
var server = net.createServer(function (socket) {
 // socket handling logic
  var date = new Date();

  var addzero = function(num) {
    if (num< 10) {return "0"+num;}
    else {return num;}
  };

  data = date.getFullYear()+"-"+addzero(date.getMonth()+1)+ "-"+addzero(date.getDate())+" " +addzero(date.getHours())+":" +addzero(date.getMinutes())+"\n";

 socket.write(data);
 socket.end();
});
server.listen(process.argv[2]);
