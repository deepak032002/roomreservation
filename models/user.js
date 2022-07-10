const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    mobile: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    isAgent: {
        type: Boolean,
        required: true,
        default: false
    },
})

const user = mongoose.model('Users', userModel);
user.createIndexes()

module.exports = user;