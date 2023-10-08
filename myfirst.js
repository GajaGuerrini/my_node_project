var http = require('http'); // tako poklicem/vkljucim knjiznjico
var dt = require('./myfirstmodule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current date and time:" + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080); 