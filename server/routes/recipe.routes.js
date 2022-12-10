const RecipeController = require('../controllers/recipe.controller.js')

module.exports = (app) => {
    app.post('/api/recipes', RecipeController.createRecipe);

    app.get('/api/recipes', RecipeController.getAllRecipes);

    app.get('/api/recipes/:id', RecipeController.getOneRecipe);

    app.put('/api/recipes/:id', RecipeController.updateRecipe);

    app.delete('/api/recipes/:id', RecipeController.deleteRecipe);

}