// Require mysql
var mysql = require("mysql");

// Set up connection information
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "Dimitri2",
//   database: "recipes"
// });
var connection = mysql.createConnection(process.env.JAWSDB_URL);

var fs = require('fs');
var readline = require('readline');
// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
var rl = readline.createInterface({
  input: fs.createReadStream('./schema.sql'),
  terminal: false
 });
rl.on('line', function(chunk){
    connection.query(chunk.toString('ascii'), function(err, sets, fields){
     if(err) console.log(err);
    });
});

// Export connection
module.exports = connection;