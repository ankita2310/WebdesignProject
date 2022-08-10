const  mongoose = require('mongoose')

const Model = require('../models/courseModel');
const Service = require('../services/courseServices')

exports.course_get = async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.course_one = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.create = async (req, res) => {
    const data = new Model({
        courseId: req.body.courseId,
        courseName: req.body.courseName,
        instructor: req.body.instructor,
        level: req.body.level,
        enrollment: req.body.enrollment,
        currentEnrollment: 0
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message})
    }
}

exports.edit = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const dbCourse = await Model.findById(id)
        const data = await Model.findByIdAndDelete(id)
        res.send(`Course ${dbCourse.courseId} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}