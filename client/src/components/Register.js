import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [ user, setUser ] = useState({});

    const [ fname, setFname ] = useState("")
    const [ lname, setLname] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ confirmPW, setConfirmPW] = useState("")

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/users/register', {
            firstName: fname,
            lastName: lname,
            email,
            password,
            confirmPassword: confirmPW
        }, {withCredentials: true})
            .then(res => {
                console.log("attempting to register")
                console.log(res);
                console.log(res.data);
                setUser({});
                navigate('/display/all')
            })
            .catch(err => console.log(err))
            
    }

    return (

    <div className='container bg-dark text-light p-5'>
        <form onSubmit={onSubmitHandler}>
            <h1>Register</h1>
            <p>
                <label>First Name</label>
                <input className='form-control' type="text" name="name" value={fname}
                    onChange = { (e) => setFname(e.target.value)} 
                    />
                {fname && fname.length < 3 ? <p className='alert alert-warning'>First Name must be at least 3 characters long!</p>: null }
            </p>

            <p>
                <label>Last Name</label>
                <input className='form-control' type="text" name="type" value={lname}
                    onChange = { (e) => setLname(e.target.value)} 
                    />
                {lname && lname.length < 3 ? <p className='alert alert-warning'>Last Name must be at least 3 characters long!</p>: null }
            </p>

            <p>
                <label>Email</label>
                <input className='form-control' type="text" name="description" value={email}
                    onChange = { (e) => setEmail(e.target.value)} 
                    />
            </p>

            <p>
                <label>Password</label>
                <input className='form-control' type="text" name="skillOne" value={password}
                    onChange = { (e) => setPassword(e.target.value)} 
                    />
            </p>

            <p>
                <label>Confirm Password</label>
                <input className='form-control' type="text" name="skillTwo" value={confirmPW}
                    onChange = { (e) => setConfirmPW(e.target.value)} 
                    />
            </p>

            <div>
                <input type="submit" className='btn btn-success' value="Submit" />
            </div>

        </form>

    </div>

    )
}

export default Register