var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});


var buffer = fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

buf = new Buffer(256);
len = buf.toString();

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


