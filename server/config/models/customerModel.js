const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: {
        type: Number
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
})

module.exports = mongoose.model('Customer', customerSchema)