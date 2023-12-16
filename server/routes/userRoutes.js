require('dotenv').config();
const express = require('express');

const router = express.Router();
const cors = require('cors');
const {
    registerUser,
    loginUser,
    getProfile,
    logout,
} = require('../controllers/userControllers');

//middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
);

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.get('/logout' , logout)
module.exports = router;
