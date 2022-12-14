const mongoose = require('mongoose');
const User = require('./user.model');

const RecipeSchema = new mongoose.Schema({
    name: { type: String },
    
    description: { type: String },
    
    totalCookTime: { type: String },
    
    protein: {type: String, 
            enum:[
            'Ground Beef',
            'Turkey',
            'Chicken',
            'Tuna',
            'Pork',
            'Lamb',
            'Pepperoni',
            'Bacon',
            'Italian Sausage',
            'Ham',
            'Meatballs',
            'Lentils',  
            'Tofu',  
            'Beans',
            'Vegan Ground Beef',
            'Vegan Pepperoni',
            'Vegan Sausage',
            'Vegan Ham',
            'Vegan Bacon',
            'Beyond Meat', 
            'Impossible Meat',
            'No Protein'], 
            required: true},
    
    
    
    dairy: {type: String,
            enum: [
            'Eggs',
            'Whole Milk', 
            'Skim Milk',
            'Heavy Cream',
            'Goat Milk',
            'Oat Milk',
            'Almond Milk',
            'Soy Milk',
            'Vegan Heavy Cream',
            'Mozzarella Cheese',
            'Parmesan Cheese',
            'Feta Cheese',
            'Goat Cheese',
            'Manchego Cheese',
            'Cheddar Cheese',
            'Pepper Jack Cheese',
            'Colby Cheese',
            'Vegan Mozzarella Cheese',
            'Vegan Parmesan Cheese',
            'Vegan Feta Cheese',
            'Vegan Pepper Jack Cheese',
            'Vegan Cheddar Cheese',
            'Vegan Colby Cheese',
            'No Dairy'],
            required: true},
    
    isVegan: {type: String, required: true },

    extraIngredients: {type: String, required: true},
    
    instructions: {type: String, required: true},

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }


}, { timestamps: true });

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;