// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all recipes
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM recipes";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("Recipe Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO recipes (author, sandwich, ingredients, created_at) VALUES (?,?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.sandwich, req.body.ingredients, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Recipe Successfully Saved!");
      res.end();
    });
  });
};