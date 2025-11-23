const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute'); 
const adminRoute = require('./Routes/adminRoute'); 
const feedRoute = require('./Routes/feedRoute'); 
const membershipRoute = require('./Routes/membershipRoute');
const workoutRoute = require('./Routes/workoutRoute');
const url = "mongodb://127.0.0.1:27017/meter";
mongoose.connect(url)
    .then(() => console.log("Mongodb connect success"))
    .catch((e) => console.log("Something went wrong", e));

// Middleware

app.use(cors());
app.use(express.json());

app.use(userRoute); 
app.use(adminRoute); 
app.use(feedRoute); 
app.use(membershipRoute); 
app.use(workoutRoute); 

// Start the server
app.listen(port, () => console.log(`Server started at ${port}`));
