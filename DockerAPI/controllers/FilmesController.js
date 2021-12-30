'use strict';

var utils = require('../utils/writer.js');
var FilmesController = require('../service/FilmesControllerService');

module.exports.createFilme = function createFilme (req, res, next, body) {
  FilmesController.createFilme(body)
    .then(FilmesController.retrieveFilme)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFilme = function deleteFilme (req, res, next, id) {
  FilmesController.deleteFilme(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFilme = function retrieveFilme (req, res, next, id) {
  FilmesController.retrieveFilme(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFilmes = function retrieveFilmes (req, res, next) {
  FilmesController.retrieveFilmes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFilme = function updateFilme (req, res, next, body, id) {
  FilmesController.updateFilme(body, id)
    .then(FilmesController.retrieveFilme)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
