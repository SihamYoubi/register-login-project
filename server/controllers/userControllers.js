const User = require('../models/userModel');

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

       const user =  await User.create({
            name , email , password
        })

        return res.json(user)

        
    } catch (error) {
        return res.json( error);
    }
};

module.exports = {
    test,
    registerUser,
};
