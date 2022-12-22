import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';


const OneRecipe = (props) => {

    const {id} = useParams();

    const [singleRecipe, setSingleRecipe] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then((res)=>{
                console.log(res.data);
                setSingleRecipe(res.data);
        })
            .catch((err)=>{
                console.log(err);
        })
    }, [id])


    return (
    <>

        <h1 className='reg-header'>Cookbook recipes</h1>
        <Link to={'/home'} className='view-link'>Home</Link>
        <div className='card text-dark bg-light'>

            <div className='card-header text-light bg-dark'>
            <h2>{singleRecipe.name}</h2>
            </div>

            <div className='recipe card-body'>
            <h6 className='card-text'>Description: {singleRecipe.description}</h6>
            <br></br>
            <p className='card-text'>Total Cook Time: {singleRecipe.totalCookTime}</p>
            <p className='card-text'>Protein: {singleRecipe.protein}</p>
            <p className='card-text'>Dairy: {singleRecipe.dairy}</p>
            <p className='card-text'>Is It Vegan? {singleRecipe.isVegan}</p>
            <p className='card-text'>Extra Ingredients: {singleRecipe.extraIngredients}</p>
            <p className='card-text'>Instructions: {singleRecipe.instructions}</p>

            </div>

        </div>



    </>
    )

}

export default OneRecipe