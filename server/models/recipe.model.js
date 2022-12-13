const mongoose = require('mongoose');
const User = require('./user.model');

const RecipeSchema = new mongoose.Schema({
    name: { type: String },
    
    description: { type: String },
    
    totalCookTime: { type: String },
    
    protein: {type: String, 
            enum:['Beef',
            'Turkey',
            'Chicken',
            'Tuna',
            'Pork',
            'Lamb',
            'Lentils',  
            'Tofu',  
            'Beans', 
            'Beyond Meat', 
            'Impossible Meat',
            'No Protein'], 
            required: true},
    
    dairy: {type: String,
            enum: ['Whole Milk', 
            'Skim Milk',
            'Heavy Cream',
            'Goat Milk',
            'Oat Milk',
            'Almond Milk',
            'Soy Milk',
            'Vegan Heavy Cream',
            'No Dairy'],
            required: true},
    
    isVegan: {type: Boolean, required: true },

    extraIngredients: {type: String, required: true},
    
    instructions: {type: String, required: true},

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }


}, { timestamps: true });

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;