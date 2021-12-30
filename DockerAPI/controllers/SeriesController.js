'use strict';

var utils = require('../utils/writer.js');
var SeriesController = require('../service/SeriesControllerService');

module.exports.createSerie = function createSerie (req, res, next, body) {
  SeriesController.createSerie(body)
    .then(SeriesController.retrieveSerie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSerie = function deleteSerie (req, res, next, id) {
  SeriesController.deleteSerie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveSerie = function retrieveSerie (req, res, next, id) {
  SeriesController.retrieveSerie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveSeries = function retrieveSeries (req, res, next) {
  SeriesController.retrieveSeries()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSerie = function updateSerie (req, res, next, body, id) {
  SeriesController.updateSerie(body, id)
    .then(SeriesController.retrieve)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
