const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URL);

        console.log("DB connected successfully")


    }
    catch (err) {
        console.log(err.message);
    }
}

module.exports = { connectToMongoDB }