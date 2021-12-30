'use strict';
var sql = require('../utils/db.js');

exports.createLivro = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO livro (nome, edicao, paginas, genero, editora, escritor, lido) Values(?,?,?,?,?,?,?)", [body.nome, body.edicao, body.paginas, body.genero, body.editora, body.escritor, body.lido], function (err, res) {
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
    

exports.deleteLivro = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM livro WHERE id = ?", [id], function (err, res) {
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


exports.retrieveLivro = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM livro WHERE id = ?", [id], function (err, res) {
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

exports.retrieveLivros = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM livro", function (err, res) {
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


exports.updateLivro = function(body, id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE livro set nome = ?, edicao = ?, paginas = ?, genero = ?, editora = ?, escritor = ?, lido = ? WHERE id = ?", [body.nome, body.edicao, body.paginas, body.genero, body.editora, body.escritor, body.lido, id], function (err, res) {
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

