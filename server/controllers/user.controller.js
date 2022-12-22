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

    login: (req, res) => {
        User.findOne({email: req.body.email})
            .then((userRecord) => {
                //check if this returned object is null
                if(userRecord === null){
                    res.status(400).json({message: "Invalid Login Attempt"})
                }
                else {
                    //email is found
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid) => {
                            if(isPasswordValid){
                                console.log("Password is Valid");
                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            id:userRecord._id,
                                            email: userRecord.email,
                                            firstName: userRecord.firstName
                                        },

                                        process.env.JWT_SECRET
                                    ),

                                        {
                                            httpOnly: true,
                                            expires: new Date(Date.now() + 9000000)
                                        }
                                ).json({
                                    message: "Successful",
                                    userId: userRecord._id,
                                    userLoggedIn: userRecord.email,
                                });
                            }
                            else{
                                res.status(400).json({message: "Invalid Attempt" })
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(400).json({message: "Invalid Attempt" });
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: "Invalid Attempt" });
            })
    },

    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({
            message:"You have succesfully logged out"
        });
    },


    getLoggedInUser: (req, res) => {

        const decodedJWT = jwt.decode(req.cookies.usertoken, {
            complete: true
        })

        User.findOne({_id: decodedJWT.payload.id})
            .then((user) => {
                console.log(user);
                res.json(user)
            })
            .catch((err) =>{
                console.log(err);
            })
    }


}
