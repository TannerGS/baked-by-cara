const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number
    },
    customerId: {
        type: Number
    },
    product: {
        type: String
    },
    quantity: {
        type: Number
    },
    contact: {
        type: String
    },
    payment: {
        type: String
    }
})

module.exports = mongoose.model('Order', orderSchema)