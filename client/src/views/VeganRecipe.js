import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';


const VeganRecipe = (props) => {

    const {id} = useParams();

    const [singleVeganRecipe, setSingleVeganRecipe] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipesvegan/${id}`)
            .then((res)=>{
                console.log(res.data);
                setSingleVeganRecipe(res.data);
        })
            .catch((err)=>{
                console.log(err);
        })
    }, [id])

    // const VeganizeIt = () => {
    //     axios.get 
    // }

    return (
    <>

        <h1>Welcome User</h1>
        <Link to={'/home'}>Home</Link>
        <div className='card text-dark bg-light'>

            <div className='card-header text-light bg-dark'>
            {/* <h2>{singleRecipe.name}</h2>
            </div>

            <div className='card-body'>
                <h5> {singleRecipe.description} </h5> */}
            
            {/* <p className='card-text'>Total Cook Time: {singleRecipe.totalCookTime}</p>
            <p className='card-text'>Protein: {singleRecipe.protein}</p>
            <p className='card-text'>Dairy: {singleRecipe.dairy}</p>
            <p className='card-text'>Is It Vegan? {singleRecipe.isVegan}</p>
            <p className='card-text'>Extra Ingredients: {singleRecipe.extraIngredients}</p>
            <p className='card-text'>Instructions: {singleRecipe.instructions}</p> */}

            
            <button className='btn btn-success'>Veganize It</button>
            </div>

        </div>



    </>
    )

}

export default VeganRecipe