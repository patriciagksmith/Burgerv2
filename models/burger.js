var orm = require("../config/orm.js");

var burger = {
  all: function(cheeseburger) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cheeseburger) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cheeseburger) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;