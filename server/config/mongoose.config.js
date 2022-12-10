const mongoose = require('mongoose');

// const dbName = "recipesDB"; 

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(`Connection established to ${process.env.DB_NAME}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));