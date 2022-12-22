import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = (props) => {

    const [user, setUser] = useState({});

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/users/register', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword

        }, {withCredentials: true})
    
            .then(res => {
                console.log("attempting to register")
                console.log(res);
                console.log(res.data);

                setUser({});
                
                navigate('/home')
            })
            .catch(err => console.log(err))
            
    }

return (

    <div className='reg-container container text-dark p-5'>
        <form onSubmit={onSubmitHandler}>
            
            <h1 className="reg-header">Welcome to CookBook Recipes</h1>
            
            <h2 className='text-light'>Register</h2>

            <p>
                <label className='reg-label'>First Name</label>
                <input className='form-control'
                    type ="text"
                    name="firstName"
                    value={firstName}
                    onChange = { (e) => setFirstName(e.target.value)}
                    />
            </p>

            <p>
                <label className='reg-label'>Last Name</label>
                <input className='form-control'
                    type ="text"
                    name="lastName"
                    value={lastName}
                    onChange = { (e) => setLastName(e.target.value)}
                    />
            </p>

            <p>
                <label className='reg-label'>Email</label>
                <input className='form-control' 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange = { (e) => setEmail(e.target.value)} 
                    />
            </p>

            <p>
                <label className='reg-label'>Password</label>
                <input className='form-control' 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange = { (e) => setPassword(e.target.value)} 
                    />
            </p>

            <p>
                <label className='reg-label'>Confirm Password</label>
                <input className='form-control' 
                    type="password" 
                    name="password" 
                    value={confirmPassword}
                    onChange = { (e) => setConfirmPassword(e.target.value)} 
                    />
            </p>

            <div>
                <input type="submit" className='btn btn-dark' value="Register" />
            </div>

        </form>

    </div>


    )
}

export default Register