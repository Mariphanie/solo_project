import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const DisplayAll = () => {

    const [ recipe, setRecipe ] = useState([]);
    const [ user, setUser ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes")
        .then((res) => {
            console.log(res.data);
            setRecipe(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const logoutUser = (e) => {
        axios.post('http://localhost:8000/api/users/logout')
        .then((res) => {
            console.log(res.data);
            setUser(res.data)

            navigate('/')

        })
        .catch(err => console.log(err))
    }


    const deleteRecipe = (recipeId) => {
        axios.delete(`http://localhost:8000/api/recipes/${recipeId}`)
        .then(res => {
            removeFromDom(recipeId)
        })
        .catch(err => console.log(err))
    }

    const removeFromDom = recipeId => {
        setRecipe(recipe.filter(food => food._id !== recipeId));
    }




    return (

        <div className='container'>

            <h1>Welcome to Best of Both Recipes</h1>

            <div>
            <Link to={"/recipe/new"}>CreateRecipe</Link>
            </div>

            <button className='btn btn-link' onClick={logoutUser}>Logout
            </button>

            <table className='table table-hover table-dark'>
                <thead>
                    <tr>
                        <th scope="col" className="text-light bg-dark">Name</th>
                        <th scope="col" className="text-light bg-dark">TCT (total cook time)</th>
                        <th scope="col" className="text-light bg-dark">Vegan?</th>
                        <th scope="col" className="text-light bg-dark">Posted By</th>
                        <th colSpan="3" className="text-light bg-dark">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {recipe.map((food, index) => {
                        return (
                            <tr key={food._id}>

                                <td className='text-light bg-dark'>{food.name}</td>

                                <td className='text-light bg-dark'>{food.totalCookTime}</td>

                                <td className='text-light bg-dark'>{food.isVegan}</td>

                                <td className='text-light bg-dark'>{food.createdBy.firstName}</td>

                                <td><Link to={`/recipe/one/${food._id}`}>Details</Link></td>

                                <td><Link to={`/recipe/edit/${food._id}`}>Edit</Link></td>

                                <td>
                                <button className='text-dark bg-danger' onClick={(e)=>{deleteRecipe(food._id)}}>Delete
                                </button>
                                
                                </td>
                            
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default DisplayAll