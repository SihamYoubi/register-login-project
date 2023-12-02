const mongoose = require('mongoose');
//calling the property schema from mongoose
const { Schema } = mongoose;


const userSchema = new Schema ({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
    }
})


const User = mongoose.model('user' , userSchema)
module.exports = User;