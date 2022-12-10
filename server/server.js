require("dotenv").config();

const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({
    // adding the ability to use credentials with cookies
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config'); 
require('./routes/recipe.routes')(app);
require('./routes/user.routes')(app);

app.listen(process.env.MY_PORT, () => console.log(`Oh heyyy you made it to port ${process.env.MY_PORT}`));