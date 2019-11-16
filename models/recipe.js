const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  Author: {
    type: String,
    trim: true,
    required: "What's Your Name?"
      },
  Sandwich: {
    type: String,
    trim: true,
    required: "Enter a name for your grilled-cheese masterpiece"
  },
  Ingredients: {
    type: String,
    required: "List The Ingredients"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;