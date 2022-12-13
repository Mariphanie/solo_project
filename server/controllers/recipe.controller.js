const Recipe = require('../models/recipe.model');
const jwt = require("jsonwebtoken");
const User = require('../models/user.model')

const RecipeController = {

    createRecipe:(req, res) => {
        const newRecipeObject = new Recipe(req.body);

        // const decodedJWT = jwt.decode(req.cookies.usertoken, {
        //     complete: true
        // })

        // newRecipeObject.createdBy = decodedJWT.payload.id;
        newRecipeObject.createdBy = req.jwtpayload.id;

        newRecipeObject.save()

        .then((newRecipe) => {
            res.status(201).json(newRecipe)
        })
        .catch ((err) => {
            res.status(404).json({msg: "Something went wrong", error: err})
        })

    },

    getAllRecipes:(req, res) => {
        Recipe.find()
        .populate("createdBy", "email")
        .then((allRecipes) => {
            res.json(allRecipes)
        })
        .catch ((err) => {
            res.status(404).json({msg: "Something went wrong", error: err})
        })

    },

    getOneRecipe:(req, res) => {
        Recipe.findOne({_id:req.params.id})
        .then((oneRecipe) => {
            res.status(201).json(oneRecipe)
        })
        .catch ((err) => {
            res.json({msg: "Something went wrong", error: err})
        })

    },

    updateRecipe:(req, res) => {
        Recipe.findOneAndUpdate({_id:req.params.id}, req.body, {new:true,runValidators:true})
        .then((updateRecipe) => {
            res.json(updateRecipe)
        })
        .catch ((err) => {
            res.status(404).json({msg: "Something went wrong", error: err})
        })

    },

    findAllRecipesByUser: (req, res) =>{
        if(req.jwtpayload.email !== req.params.email){
            User.findOne({email: req.params.email})
                .then((userNotLoggedIn)=>{
                    Recipe.find({createdBy: userNotLoggedIn._id})
                        .then((allRecipesFromUser) => {
                            console.log(allRecipesFromUser);
                            res.json(allRecipesFromUser);
                        })
                        .catch((err)=>{
                            console.log(err);
                            res.status(400).json({msg: "Something went wrong", error: err})
                        })
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json({msg: "Something went wrong", error: err})
                })
        }
        else{
            Recipe.find({createdBy: req.jwtpayload.id})
                .then((allRecipesFromLoggedInUser) => {
                    console.log(allRecipesFromLoggedInUser);
                    res.json(allRecipesFromLoggedInUser);
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json(err);
                })
        }
    },

    deleteRecipe:(req, res) => {
        Recipe.findOneAndDelete({_id:req.params.id})
        .then((deleteRecipe) => {
            res.json(deleteRecipe)
        })
        .catch ((err) => {
            res.json({msg: "Something went wrong", error: err})
        })
    },

}

module.exports = RecipeController