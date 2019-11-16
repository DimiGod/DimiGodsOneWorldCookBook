const router = require("express").Router();
const Recipe = require("../models/recipe.js");

router.post("/api/recipe", ({ body }, res) => {
  Recipe.create(body)
    .then(dbRecipe => {
      res.json(dbRecipe);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/recipe/bulk", ({ body }, res) => {
  Recipe.insertMany(body)
    .then(dbRecipe => {
      res.json(dbRecipe);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/recipe", (req, res) => {
  Recipe.find({})
    .sort({ date: -1 })
    .then(dbRecipe => {
      res.json(dbRecipe);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;