const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const dataSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    membershipType: {
        required: true,
        type: String
    }
})

dataSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, salt)
        this.password = hashPassword
        next()

    } catch(error) {
        next(error)
    }
})

module.exports = mongoose.model('Data', dataSchema)