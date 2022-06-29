var express = require('express');
app = express();
var response;

/*app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  
  res.send('Hello Mars!\n');
});*/

app.get('/',function(req, res){
  response = "Esta es la segunda version de la app\n";
  res.send(response);
}

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

