module.exports.index = function(application, req, res) {
  var stagModel = new application.src.models.stag();

  stagModel.verVagasEstagio(function(err, result) {
    res.render("news/index", {stag : result});
  });
}

