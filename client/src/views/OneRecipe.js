import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
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
    }, [])


    return (
    <>
        <h1>Welcome, User </h1>
        <div className='single'>
            <h2>{singleRecipe.name}</h2>
            <p>{singleRecipe.description}</p>
            <p>{singleRecipe.totalCookTime}</p>
            <p>{singleRecipe.protein}</p>
            <p>{singleRecipe.dairy}</p>
            <p>{singleRecipe.isVegan}</p>
            <p>{singleRecipe.extraIngredients}</p>
            <p>{singleRecipe.instructions}</p>
        </div>

        <button>Veganize It</button>
    </>
    )

}

export default OneRecipe