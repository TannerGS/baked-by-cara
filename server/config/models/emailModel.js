const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email: {
        type: String
    },
})

module.exports = mongoose.model('Email', emailSchema)