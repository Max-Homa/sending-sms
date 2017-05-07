var express = require('express');

var app = express();

// http://localhost:8080/
app.get('/', (req, res) => {
  res.sendfile('./index.html');
});

//Start server on the port 8080.
app.listen(8080, () => {
	console.log('>>> Server started!');
});