var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cheeseburger) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cheeseburger(result);
    });
  },
 
  create: function(table, columns, values, burger) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      cheeseburger(result);
    });
  },

  update: function(table, bjColVals, condition, burger) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(bjColValss);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cheeseburger(result);
    });
  }
};

module.exports = orm;