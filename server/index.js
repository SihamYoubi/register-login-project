require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const PORT = require('./config/env').PORT
const connectDB = require('./config/database')

//initial express
const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/' , require('./routes/userRoutes'))
connectDB();
app.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`))