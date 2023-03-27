
const express = require('express');
const { DisplayLesson, createCourse,deleteCourse,updateCourse} = require('../Controllers/courseController');
const router = express.Router()
router.get('/getCourses/:id',DisplayLesson)
router.post('/createcourse',createCourse)
router.delete('/delete/:id' ,deleteCourse),
router.put('/updateCourse/:id' ,updateCourse),
module.exports = router