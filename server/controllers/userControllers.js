const User = require('../models/userModel');
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
    res.json('test is working');
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.json({
                error: 'name is required',
            });
        }

        if (!password) {
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
            password : hashedPassword,
        });

        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
};

const loginUser = async(req , res) => {
 try {

     const {email , password} = req.body
     const user = await User.findOne({email})
     console.log(user)
     if(!user){
        return res.json({error : 'No user found' })
     }

    validPassword = await comparePassword(password , user.password)
    if(validPassword) {
        return res.json('password match')
    }

 } catch (error) {
    console.log(error)
 }

}

module.exports = {
    test,
    registerUser,
    loginUser
};
