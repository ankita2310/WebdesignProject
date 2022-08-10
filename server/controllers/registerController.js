const  mongoose = require('mongoose')

const Register = require('../models/registrationModel');
const Course = require('../models/courseModel');

exports.register = async (req,res) => {
    const studentid = req.params.studentid;
    const courseid = req.params.courseid;

    const isRegistered = await Register.findOne({courseId:courseid, userId:studentid})
    if(isRegistered === null) {
        const data = new Register({
            courseId: courseid,
            userId: studentid
        })
        const course = await Course.findById(courseid)
        course.enrollment = course.enrollment - 1
        course.currentEnrollment = course.currentEnrollment + 1
        const options = { new: true };
        try {
            const dataToSave = await data.save();
            const result = await Course.findByIdAndUpdate(
                courseid, course, options
            )    
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({ message: error.message})
        }    
    }
    else {
        res.status(400).json({ message: 'Student is already registered for the course'})
    }
}

exports.deregister = async (req,res) => {
    const studentid = req.params.studentid;
    const courseid = req.params.courseid;

    const isRegistered = await Register.findOne({courseId:courseid, userId:studentid})
    if(isRegistered !== null) {
        const id = isRegistered.id
        const course = await Course.findById(courseid)
        course.enrollment = course.enrollment + 1
        course.currentEnrollment = course.currentEnrollment - 1
        const options = { new: true };

        try {
            const data = await Register.findByIdAndDelete(id)
            const result = await Course.findByIdAndUpdate(
                courseid, course, options)
            res.send(`Registration for user has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message})
        }    
    }
    else {
        res.status(400).json({ message: 'Student is not registered for the course'})
    }
}


exports.my_courses = async (req, res) => {
    try {
        const studentid = req.params.studentid;
        const data = await Register.find({userId:studentid})
        var arr = []
        for(i=0;i<data.length;i++) {
            const course = await Course.findById(data[i].courseId)
            arr.push(course)
        }
        res.json(arr)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
