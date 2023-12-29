const User = require('../models/userModel');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/env').JWT_SECRET;

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.json({
                error: 'name is required',
            });
        }

        if (!password || password.length <= 6) {
            return res.json({
                error: 'password is required and should be at least 6 charachters long',
            });
        }

        const exists = await User.findOne({ email });

        if (exists) {
            return res.json({ error: 'email is already existed' });
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'Invalid Credentials' });
        }

        const validPassword = await comparePassword(password, user.password);
        if (!validPassword) {
            return res.json({ error: 'Invalid credentials' });
        }

        //the info that we are going to sent through out the cookie
        const token = jwt.sign(
            { email: user.email, id: user._id , name: user.name },
            JWT_SECRET,
            { expiresIn: '1d' },
            (err, token) => {
                //for access_login

                //put the token on the cookies that exist in the borwser , so for every request from the user this cookie will be sent with the request of the user
                // to verify the user authorization
                res.cookie('token', token).json(user);
            }
        );
        return token;
    } catch (error) {
        console.log(error);
    }
};

const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, JWT_SECRET, { expiresIn: '1d' }, (err, user) => {
            if (err) throw err;
            return res.json(user);
        });
    } else {
        res.send('null');
    }
};

const logout = (req , res) => {
    return res.clearCookie("token").json({message:'logout successfuly'})
};
module.exports = {
    registerUser,
    loginUser,
    getProfile,
    logout,
};
