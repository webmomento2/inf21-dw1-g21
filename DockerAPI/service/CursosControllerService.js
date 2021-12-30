'use strict';
var sql = require('../utils/db.js');

exports.createCurso = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO curso (materia, videos, professor, assistido) Values(?,?,?,?)", [body.materia, body.videos, body.professor, body.assistido], function (err, res) {
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
    

exports.deleteCurso = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM curso WHERE id = ?", [id], function (err, res) {
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


exports.retrieveCurso = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM curso WHERE id = ?", [id], function (err, res) {
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

exports.retrieveCursos = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM curso", function (err, res) {
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


exports.updateCurso = function(body, id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE curso set materia = ?, videos = ?, professor = ?, assistido = ? WHERE id = ?", [body.materia, body.videos, body.professor, body.assistido, id], function (err, res) {
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

