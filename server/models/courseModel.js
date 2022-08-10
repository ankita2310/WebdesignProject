const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    courseId: {
        required: true,
        type: String,
        unique: true
    },
    courseName: {
        required: true,
        type: String
    },
    instructor: {
        type: String
    },
    level: {
        type: String
    },
    enrollment: {
        required: true,
        type: Number
    },
    currentEnrollment: {
        type: Number
    }
})

module.exports = mongoose.model('Course', dataSchema)