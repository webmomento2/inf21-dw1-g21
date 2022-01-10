'use strict';

var utils = require('../utils/writer.js');
var LivrosFilmesController = require('../service/LivrosFilmesControllerService');

module.exports.retrieveFilmesForLivros = function retrieveFilmesForLivros (req, res, next, id) {
  LivrosFilmesController.retrieveFilmesForLivros(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
