const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//...................user model..................
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => bcrypt.hashSync(value, 10),

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

const user = mongoose.model('users', userSchema)
module.exports = user