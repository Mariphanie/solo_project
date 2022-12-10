const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: { type: String },
    
    description: { type: String },
    
    totalCookTime: { type: String },
    
    protein: {type: String, 
        enum:['Beef','Turkey','Chicken','Tuna','Pork','Lamb','Venison',
        'Lentils', 'Quinoa', 'Tofu', 'Seitan', 'Beans', 'Beyond Meat', 'Impossible Meat'], 
        required: true},
    
    dairy: {type: String,
        enum: ['Whole Milk', 'Skim Milk', 'Oat Milk'],
        required: true},

    seasonings: {type: String,
        enum: ['salt', 'pepper'],
        required: true},
    
    extraIngredients: {type: String},
    
    instructions: {type: String},

    isVegan: {type: Boolean, required: true }

}, { timestamps: true });

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;