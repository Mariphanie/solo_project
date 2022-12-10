const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    register: (req, res) =>{
        console.log("in register");
        console.log(req.body);

        // use the request data and User model constructor to create a user object 
        const user = new User(req.body);


        user.save()
            .then((newUser)=>{
                console.log(newUser);
                console.log("Succesfully Registered")
                res.json({
                    successMessage: "Thank you for registering",
                    user: newUser
                })
            })
            .catch((err)=>{
                console.log("Register not successful")
                res.status(400).json(err)
            })
    },


}
