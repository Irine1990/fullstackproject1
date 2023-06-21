const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require("../db");

conn.connectToMongoDB();

const customersSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Please enter the First Name"]
    },
    lastname: {
        type: String,
        required: [true, "Please enter the lastname"]
    },
    password: {
        type: String,
        required: [true, "Please enter the Password"]
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },

    address: {
        type: String
    },

});

const CustomersCollection = mongoose.model("customer", customersSchema);

module.exports = CustomersCollection;