import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DisplayAll = () => {

    const [ recipe, setRecipe ] = useState([]);

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

    return (

        <div className='container'>

            <h1>Welcome, User </h1>

            <Link to={"/recipe/new"}>CreateRecipe</Link>

            <Link to={"/"}>logout</Link>


            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th scope="col" className="text-light bg-dark">Name</th>
                        <th scope="col" className="text-light bg-dark">TCT (total cooking time)</th>
                        <th scope="col" className="text-light bg-dark">Vegan?</th>
                        <th scope="col" className="text-light bg-dark">Posted By</th>
                        <th colspan="3" className="text-light bg-dark">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipe.map((food, index) => {
                        return (
                            <tr key={food._id}>

                                <td className='text-light bg-dark'>{food.name}</td>

                                <td className='text-light bg-dark'>{food.totalCookTime}</td>


                                <td><Link to={`/recipe/one/${food._id}`}>Details</Link></td>

                                <td><Link to={`/recipe/edit/${food._id}`}>Edit</Link></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default DisplayAll