import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const NewRecipe = (props) => {
    
    const [recipe, setRecipe] = useState("");

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [totalCookTime, setTotalCookTime] = useState("")
    const [protein, setProtein] = useState("")
    const [dairy, setDairy] = useState("")
    const [isVegan, setIsVegan] = useState("")
    const [extraIngredients, setExtraIngredients] = useState("")
    const [instructions, setInstructions] = useState("")


    const navigate = useNavigate();

    const onRadioChange = (e) => {
        console.log(e.target.value)
        setIsVegan(e.target.value)
    }


    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/recipes', {
            name,
            description,
            totalCookTime,
            protein,
            dairy,
            isVegan,
            extraIngredients,
            instructions

        }, {withCredentials: true})
    
            .then(res => {
                console.log("attempting to create new recipe")
                console.log(res);
                console.log(res.data);



                setRecipe([...recipe, res.data]);
                
                navigate('/home')
            })
            .catch(err => console.log(err))
            
    

    }

    return (

    <div className='container bg-dark text-primary p-5'>
        
        <form onSubmit={onSubmitHandler}>
            <h1>Add a New Recipe</h1>

            <Link to={'/home'} className='text-light'>Home</Link>
            

            <p>
                <label>Name</label>
                <input className='form-control'
                    type ="text"
                    name="Name"
                    value={name}
                    onChange = { (e) => setName(e.target.value)}
                    />
            </p>

            <p>
                <label>Decription</label>
                <textarea className='form-control' rows="5" value={description}
                onChange = { (e) => setDescription(e.target.value)} />
                
            </p>


            <p>
                <label>Total Cook Time</label>
                <input className='form-control' 
                    type="text" 
                    name="totalCookTime" 
                    value={totalCookTime}
                    onChange = { (e) => setTotalCookTime(e.target.value)} 
                    />
            </p>

            <p>
                <label>Choose Your Protein:
                <select value={protein} onChange = { (e) => setProtein(e.target.value)}>
                    <option>Choose your Protein</option>
                    <option value="Ground Beef">Ground Beef</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Tuna">Tuna</option>
                    <option value="Pork">Pork</option>
                    <option value="Lamb">Lamb</option>
                    <option value="Pepperoni">Pepperoni</option>
                    <option value="Bacon">Bacon</option>
                    <option value="Italian Sausage">Italian Sausage</option>
                    <option value="Ham">Ham</option>
                    <option value="Lentils">Lentils</option>
                    <option value="Tofu">Tofu</option>
                    <option value="Beans">Beans</option>
                    <option value="Vegan Ground Beef">Vegan Ground Beef</option>
                    <option value="Vegan Pepperoni">Vegan Pepperoni</option>
                    <option value="Vegan Sausage">Vegan Sausage</option>
                    <option value="Vegan Ham">Vegan Ham</option>
                    <option calue="Vegan Meatballs">Vegan Meatballs</option>
                    <option value="Vegan Bacon">Vegan Bacon</option>
                    <option value="Beyond Meat">Beyond Meat</option>
                    <option value="Impossible Meat">Impossible Meat</option>
                    <option value="No Protein">No Protein</option>
                </select>
                </label>

            </p>

            <p>
                <label>Choose Your Dairy:
                <select value={dairy} onChange = { (e) => setDairy(e.target.value)}>
                    <option>Choose your Dairy</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Whole Milk">Whole Milk</option>
                    <option value="Skim Milk">Skim Milk</option>
                    <option value="Heavy Cream">Heavy Cream</option>
                    <option value="Goat Milk">Goat Milk</option>
                    <option value="Oat Milk">Oat Milk</option>
                    <option value="Almond Milk">Almond Milk</option>
                    <option value="Soy Milk">Soy Milk</option>
                    <option value="Vegan Heavy Cream">Vegan Heavy Cream</option>
                    <option value="Mozzarella Cheese">Mozarella Cheese</option>
                    <option value="Parmesan Cheese">Parmesan Cheese</option>
                    <option value="Feta Cheese">Feta Cheese</option>
                    <option value="Goat Cheese">Goat Cheese</option>
                    <option value="Manchego Cheese">Manchego Cheese</option>
                    <option value="Cheddar Cheese">Cheddar Cheese</option>
                    <option value="Pepper Jack Cheese">Pepper Jack Cheese</option>
                    <option value="Colby Cheese">Colby Cheese</option>
                    <option value="Vegan Mozarella Cheese">Vegan Mozarella Cheese</option>
                    <option value="Vegan Parmesan Cheese">Vegan Parmesan Cheese</option>
                    <option value="Vegan Feta Cheese">Vegan Feta Cheese</option>
                    <option value="Vegan Pepper Jack Cheese">Vegan Pepper Jack Cheese</option>
                    <option value="Vegan Cheddar Cheese">Vegan Cheddar Cheese</option>
                    <option value="Vegan Colby Cheese">Vegan Colby Cheese</option>
                    <option value="No Dairy">No Dairy</option>
                </select>
                </label>
            </p>


            <p>Is it Vegan?</p>
            <div className='form-check'>
                <label className='form-check-label' for="form-radio-checked">Yes</label>
                <input className='form-check-input' 
                    type="radio" 
                    name="isVegan" 
                    value='Yes'
                    checked ={isVegan === 'Yes'}
                    onChange = {onRadioChange}
                    />
            </div>
            
            <div className='form-check'>
                <label className='form-check-label' for="form-radio-checked">No</label>
                <input className='form-check-input' 
                    type="radio" 
                    name="isVegan" 
                    value='No'
                    checked={isVegan === 'No'}
                    onChange={onRadioChange} 
                    />
            </div>

            <div><label>Extra Ingredients:</label></div>
            <p>
                <textarea className='form-control' rows="5" value={extraIngredients}
                onChange = { (e) => setExtraIngredients(e.target.value)} />
                
            </p>

            <div><label>Instructions:</label></div>
            <p>
                <textarea className='form-control' rows="5" value={instructions} 
                onChange = {(e) => setInstructions(e.target.value)} />
            </p>

            <div>
                <input type="submit" className='btn btn-success' value="Create Recipe" />
            </div>

        </form>

    </div>

    )
}

export default NewRecipe