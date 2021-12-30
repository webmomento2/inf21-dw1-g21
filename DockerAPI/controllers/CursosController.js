'use strict';

var utils = require('../utils/writer.js');
var CursosController = require('../service/CursosControllerService');

module.exports.createCurso = function createCurso (req, res, next, body) {
  CursosController.createCurso(body)
    .then(CursosController.retrieveCurso)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCurso = function deleteCurso (req, res, next, id) {
  CursosController.deleteCurso(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCurso = function retrieveCurso (req, res, next, id) {
  CursosController.retrieveCurso(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCursos = function retrieveCursos (req, res, next) {
  CursosController.retrieveCursos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCurso = function updateCurso (req, res, next, body, id) {
  CursosController.updateCurso(body, id)
    .then(CursosController.retrieveCurso)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
