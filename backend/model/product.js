const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//...................user model..................
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        // required: true,
        ref:'users'
    },
    deleted_at: {
        type: Date,
        required: false
    }
}, {
    timestamps: { created_At: 'created_at', updated_At: 'updated_at' },
    toJSON: {
        getters: true,
        setters: true
    },
    toObject: {
        getters: true,
        setters: true
    }
})

const product = mongoose.model('products', productSchema)
module.exports = product