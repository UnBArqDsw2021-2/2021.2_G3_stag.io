var fs = require('fs');

function stag() {}

stag.prototype.verVagasEstagio = function(callback) {
  fs.readFile('./data/vagas.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

      if (obj.vagas.length > 4) {
        var i = 4;
      } 
      else {
        var i = (obj.vagas.length - 1);
      }
    
      obj.vagas.forEach(function(vaga_estagio) {
        if (i >=  0) {
          data[i] = vaga_estagio;
          
	  i--;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return stag;
}

