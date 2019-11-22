/* global moment */
// When the page loads, grab and display all of our recipes
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("recipe");

      row.append(`<img src= "` + data[i].img + `" class="sammy">`);
      row.append("<h4>" + data[i].author + " added... </h4>");
      row.append("<h3>" + data[i].sandwich + "</h3>");
      row.append("<p>" + data[i].ingredients + "</p>");
      row.append("<p>" + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#recipe-area").prepend(row);

    }

  }

});

// When user adds recipe (clicks addBtn)
$("#recipe-submit").on("click", function(event) {
  event.preventDefault();

  // Make a new recipe object
  var newRecipe = {
    img: $("#image").val().trim(),
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
      row.append(`<img src= "` + newRecipe.img + `">`);
      row.append("<h4>" + newRecipe.author + " </h4>");
      row.append("<h3>" + newRecipe.sandwich + "</h3>");
      row.append("<p>" + newRecipe.ingredients + "</p>");
      row.append("<p>" + moment(newRecipe.created_at).format("h:mma on dddd") + "</p>");

      $("#recipe-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#image").val("");
  $("#author").val("");
  $("#sandwich").val("");
  $("#ingredients-box").val("");
});