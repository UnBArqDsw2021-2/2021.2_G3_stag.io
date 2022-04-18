module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.stag.index(application, req, res);
  });
}

