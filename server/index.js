require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = require('./config/env').PORT
const connectDB = require('./config/database')

//initial express
const app = express();


app.use(express.json())
app.use('/' , require('./routes/userRoutes'))
connectDB();
app.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`))