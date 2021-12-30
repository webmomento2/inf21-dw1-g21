'use strict';
var sql = require('../utils/db.js');

exports.createFilme = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO filme (nome, ano, duracao, genero, produtora, diretor, assistido, adptado) Values(?,?,?,?,?,?,?,?)", [body.nome, body.ano, body.duracao, body.genero, body.produtora, body.diretor, body.assistido, body.adptado], function (err, res) {
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
    

exports.deleteFilme = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM filme WHERE id = ?", [id], function (err, res) {
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


exports.retrieveFilme = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM filme WHERE id = ?", [id], function (err, res) {
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

exports.retrieveFilmes = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM filme", function (err, res) {
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


exports.updateFilme = function(body, id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE filme set nome = ?, ano = ?, duracao = ?, genero = ?, produtora = ?, diretor = ?, assistido = ?, adptado = ? WHERE id = ?", [body.nome, body.ano, body.duracao, body.genero, body.produtora, body.diretor, body.assistido, body.adptado, id], function (err, res) {
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

