import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/users/login', {

            email,
            password,

        }, {withCredentials: true})
    
            .then(res => {
                console.log("attempting to login")
                console.log(res);
                console.log(res.data);
                
                navigate('/home')
            })
            .catch(err => console.log(err))
            
    }

    return (
        <div className='container bg-dark text-light p-5'>
        <form onSubmit={onSubmitHandler}>
            <h1>Login</h1>


            <p>
                <label>Email</label>
                <input className='form-control' type="email" name="email" value={email}
                    onChange = { (e) => setEmail(e.target.value)} 
                    />
            </p>

            <p>
                <label>Password</label>
                <input className='form-control' type="password" name="password" value={password}
                    onChange = { (e) => setPassword(e.target.value)} 
                    />
            </p>

            <div>
                <input type="submit" className='btn btn-primary' value="Login" />
            </div>

        </form>

    </div>
        
    )
}

export default Login