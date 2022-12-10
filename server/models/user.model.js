const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First Name is required"],
    },

    lastName: {
        type: String,
        required: [true, "Last Name is required"],
    },

    email: {
        type: String,
        required: [true, "Email is required"],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password MUST be at least 8 characters long"],
    },

    //confirm password is NOT included here so it will NOT be included in the collection
    // we only need a copy of the password if they match

}, {timestamps: true})



//Virtual Field
//stores information from the request, but it will NOT save it to the collection/DB 
UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword = value);

//middleware jumps into the middle of the process, does some work and 
//then continues to the NEXT step process seemingly uninterrupted
UserSchema.pre("validate", function(next){
    console.log("inside pre-validate");
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Passwords must match!!")
        console.log("Passwords don't match!")
    }

    // run the next step in the process
        next();

});


UserSchema.pre('save', function(next){
    console.log('inside pre save');
    // encrypt the password before it is save to the DB 
    //passwords match at this point
    bcrypt.hash(this.password, 10)
        .then((hashedPassword)=>{
            // updating password in this instance to use the hash returned version
            this.password = hashedPassword;
            next();
        })
        .catch((err) => {
            console.log("Error while hashing password")
        });

});

// User will become the name of our collection
// mongoose will make it lowercase AND plural
// collection name: users 
const User = mongoose.model("User", UserSchema);

module.exports = User;