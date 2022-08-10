const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const CourseController = require('../controllers/courseController')
const RegisterController = require('../controllers/registerController')
const MiddleWare = require('../middleware/tokenValidation')

//Post Method
router.post('/create', UserController.create)

//Get all Method
router.get('/getAll', MiddleWare.validateToken, UserController.user_get)

//Get by ID Method
router.get('/getOne/:id', UserController.user_one)

//Update by ID Method
router.patch('/edit/:id', UserController.edit)

//Delete by ID Method
router.delete('/delete/:id', UserController.delete)

router.post('/login', UserController.find)

//Courses API

//Get all Method
router.get('/getAllCourses', CourseController.course_get)

//Get One Method
router.get('/getCourse/:id', CourseController.course_one)

//Post Method
router.post('/createCourse', MiddleWare.validateToken, CourseController.create)

//Delete by ID Method
router.delete('/deleteCourse/:id', MiddleWare.validateToken, CourseController.delete)

//Edit Course
router.patch('/editCourse/:courseid', MiddleWare.validateToken, CourseController.edit)

//Course Registration API

//Get my Courses Method
router.get('/getMyCourses/:studentid', MiddleWare.validateToken, RegisterController.my_courses)

//Register for a course 
router.post('/register/:studentid/:courseid', RegisterController.register)

//Deregister from a course
router.delete('/deregister/:studentid/:courseid', MiddleWare.validateToken, RegisterController.deregister)

module.exports = router;