const RecipeController = require('../controllers/recipe.controller.js')
const { authenticate } = require('../config/jwt.config.js');

module.exports = (app) => {
    app.post('/api/recipes', authenticate, RecipeController.createRecipe);

    app.get('/api/recipes', RecipeController.getAllRecipes);

    app.get('/api/recipes/:email', authenticate, RecipeController.findAllRecipesByUser)

    app.get('/api/recipes/:id', RecipeController.getOneRecipe);

    app.put('/api/recipes/:id', RecipeController.updateRecipe);

    app.delete('/api/recipes/:id', RecipeController.deleteRecipe);

}