'use strict';
var sql = require('../utils/db.js');

exports.createSerie = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO serie (nome, ano, temporadas, genero, produtora, assistido) Values(?,?,?,?,?,?)", [body.nome, body.ano, body.temporadas, body.genero, body.produtora, body.assistido], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}
    

exports.deleteSerie = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM serie WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      } else {
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}


exports.retrieveSerie = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM serie WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}

exports.retrieveSeries = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM serie", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


exports.updateSerie = function(body, id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE serie set nome = ?, ano = ?, temporadas = ?, genero = ?, produtora = ?, assistido = ? WHERE id = ?", [body.nome, body.ano, body.temporadas, body.genero, body.produtora, body.assistido, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(id);
      }
    });
  });
}

