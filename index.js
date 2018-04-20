const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI);

const app = express();

//middleware
app.use(bodyParser.json());

//routes

app.use('/api/cats.', require('./routes/blogRoutes'));

//listening
app.listen(PORT, () => {
    console.log('now listening on port ' + PORT);
    
})

