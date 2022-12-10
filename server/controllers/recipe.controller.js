const Recipe = require('../models/recipe.model'); 

module.exports.createRecipe = (request, response) => {
    Recipe.create(request.body) 
            .then((product) =>{
                console.log(recipe)
                response.json(recipe)
            })

            .catch(err => {
                console.log(err)
                response.json({ message: 'Something went wrong', error: err })
            })
    },

module.exports.getAllRecipes = (request, response) => {
    Recipe.find({})
        .then((allRecipes) => {
        console.log(allRecipes);
        response.json(allRecipes);
    })
        .catch(err => {
        console.log(err)
        response.json({ message: 'Something went wrong', error: err })
    })
},

module.exports.getOneRecipe = (request, response) => {
    Recipe.findOne({_id: request.params.id})
        .then((oneRecipe) => {
        console.log(oneRecipe);
        response.json(oneRecipe);
    })
        .catch(err => {
        console.log(err)
        response.json({ message: 'Something went wrong', error: err })
    })
};

module.exports.updateRecipe = (request, response) => {
    Recipe.findOneAndUpdate(
        {_id: request.params.id},
        request.body,
        { new:true, runValidators: true, })
        .then((updatedRecipe) => {
        console.log(updatedRecipe);
        response.json(updatedrecipe);
    })
        .catch(err => {
        console.log(err)
        response.json({ message: 'Something went wrong', error: err })
    })
}

module.exports.deleteRecipe = (request, response) => {
    Recipe.deleteOne({ _id: request.params.id })
        .then(deleteRecipe => {
            console.log(deleteRecipe);
            response.json(deleteRecipe);
        })

        .catch(err => {
            console.log(err)
            response.json({ message: 'Something went wrong', error: err })
        })
}