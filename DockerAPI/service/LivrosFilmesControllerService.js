'use strict';
var sql = require('../utils/db.js');

exports.retrieveFilmesForLivros = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM filme where adptado=?", [adptado], function (err, res) {
      if (err) {
          console.log(err);
          reject(err);
      }
      else {
          console.log(res);
          resolve(res[0]);
      }
  });
});
}

