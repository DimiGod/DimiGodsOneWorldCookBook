/* global moment */

// When the page loads, grab and display all of our recipes
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("recipe");

      row.append("<p>" + data[i].author + "</p>");
      row.append("<p>" + data[i].sandwich + "</p>");
      row.append("<p>" + data[i].ingredients + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#recipe-area").prepend(row);

    }

  }

});

// When user adds new recipe (clicks addBtn)
$("#recipe-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newRecipe object
  var newRecipe = {
    author: $("#author").val().trim(),
    sandwich: $("#sandwich").val().trim(),
    ingredients: $("#ingredients-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newRecipe);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newRecipe)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("recipe");

      row.append("<p>" + newRecipe.author + " </p>");
      row.append("<p>" + newRecipe.sandwich + "</p>");
      row.append("<p>" + newRecipe.ingredients + "</p>");
      row.append("<p>At " + moment(newRecipe.created_at).format("h:mma on dddd") + "</p>");

      $("#recipe-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#sandwich").val("");
  $("#ingredients-box").val("");
});