const {mongoose} = require('mongoose')
const MONGO_URL = require('../config/env').MONGO_URL

const connectDB = () => 
{mongoose.connect(MONGO_URL).then(() => {console.log('connect to database')}
).catch((error) => console.log('connect to database was failed' , error))
}

module.exports = connectDB



