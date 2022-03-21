var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

consign()
  .include('src/middleware')
  .then('src/models')
  .then('src/controllers')
  .into(app);

app.listen(8080, function(){
  console.log('Porta de Execução: 8080');
});

