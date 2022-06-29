var express = require('express');
var response;
app = express();

app.get('/', function (req, res) {
  response = "Esta en la segunda versión de la app c:\n";
  res.send(response);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

