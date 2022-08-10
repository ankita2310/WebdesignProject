const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    courseId: {
        required: true,
        type: String
    },
    userId: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Registration', dataSchema)