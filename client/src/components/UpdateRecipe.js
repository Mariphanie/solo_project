import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const UpdateRecipe = (props) => {

    const { id } = useParams();

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [totalCookTime, setTotalCookTime] = useState("")
    const [protein, setProtein] = useState("")
    const [dairy, setDairy] = useState("")
    const [isVegan, setIsVegan] = useState(false)
    const [extraIngredients, setExtraIngredients] = useState("")
    const [instructions, setInstructions] = useState("")

    const navigate = useNavigate();

    const handleChange = () => {
        setIsVegan(!isVegan);
    };

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post(`http://localhost:8000/api/recipes/${id}`, {
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
                console.log(res.data);
                navigate('/home')
            
            })
            .catch(err => console.log(err))
            
    }

return (

    <div className='container bg-dark text-light p-5'>
        
        <form onSubmit={onSubmitHandler}>
            <h1>Add a New Recipe</h1>

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
                <label>Description</label>
                <input className='form-control'
                    type ="text"
                    name="description"
                    value={description}
                    onChange = { (e) => setDescription(e.target.value)}
                    />
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
                <label>Pick Your Protein:
                <select value={protein} onChange = { (e) => setProtein(e.target.value)}>
                    <option value="Beef">Beef</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Tuna">Tuna</option>
                    <option value="Pork">Pork</option>
                    <option value="Lamb">Lamb</option>
                    <option value="Lentils">Lentils</option>
                    <option value="Tofu">Tofu</option>
                    <option value="Beans">Beans</option>
                    <option value="Beyond Meat">Beyond Meat</option>
                    <option value="Impossible Meat">Impossible Meat</option>
                    <option value="No Protein">No Protein</option>
                </select>
                </label>

            </p>

            <p>
                <label>Pick Your Dairy:
                <select value={protein} onChange = { (e) => setDairy(e.target.value)}>
                    <option value="Whole Milk">Whole Milk</option>
                    <option value="Skim Milk">Skim Milk</option>
                    <option value="Heavy Cream">Heavy Cream</option>
                    <option value="Goat Milk">Goat Milk</option>
                    <option value="Oat Milk">Oat Milk</option>
                    <option value="Almond Milk">Almond Milk</option>
                    <option value="Soy Milk">Soy Milk</option>
                    <option value="Vegan Heavy Cream">Vegan Heavy Cream</option>
                    <option value="No Dairy">No Dairy</option>
                </select>
                </label>
            </p>

            <p>

                <label>Is it Vegan?</label>
                <input className='form-control' 
                    type="checkbox" 
                    name="isVegan" 
                    isVegan={isVegan}
                    onChange = {handleChange} 
                    />
            </p>

            <p>
                
                <label>Extra Ingredients:
                <textarea value={extraIngredients}
                onChange = { (e) => setExtraIngredients(e.target.value)} />
                </label>

            </p>

            <p>
                <label>Instructions:
                <textarea value={instructions} 
                onChange = { (e) => setInstructions(e.target.value)} />
                </label>
            </p>

            <div>
                <input type="submit" className='btn btn-success' value="Update Recipe" />
            </div>

        </form>

    </div>


    )
}

export default UpdateRecipe