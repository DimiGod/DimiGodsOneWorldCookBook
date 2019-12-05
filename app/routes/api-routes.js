// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================

connection.query("CREATE TABLE `recipes` (`id` Int( 11 ) AUTO_INCREMENT NOT NULL,`img` VARCHAR( 1000) NOT NULL,`author` VARCHAR( 255) NOT NULL,`sandwich` VARCHAR( 255) NOT NULL,`ingredients` VARCHAR( 255 ) NOT NULL,`created_at` DATETIME NOT NULL,PRIMARY KEY ( `id` ) );");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM recipes";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a recipe
  app.post("/api/new", function(req, res) {
    console.log("Recipe Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO recipes (img, author, sandwich, ingredients, created_at) VALUES (?,?,?,?,?)";

    connection.query(dbQuery, [req.body.img, req.body.author, req.body.sandwich, req.body.ingredients, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Recipe Successfully Saved!");
      res.end();
    });
  });
};