'use strict';

var utils = require('../utils/writer.js');
var LivrosController = require('../service/LivrosControllerService');

module.exports.createLivro = function createLivro (req, res, next, body) {
  LivrosController.createLivro(body)
    .then(LivrosController.retrieveLivro)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLivro = function deleteLivro (req, res, next, id) {
  LivrosController.deleteLivro(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLivro = function retrieveLivro (req, res, next, id) {
  LivrosController.retrieveLivro(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLivros = function retrieveLivros (req, res, next) {
  LivrosController.retrieveLivros()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLivro = function updateLivro (req, res, next, body, id) {
  LivrosController.updateLivro(body, id)
    .then(LivrosController.retrieveLivro)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
