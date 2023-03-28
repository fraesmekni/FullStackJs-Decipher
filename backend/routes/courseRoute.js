
const express = require('express');
const { DisplayLesson, createCourse,deleteCourse,updateCourse,SearchCourse,createLesson} = require('../Controllers/courseController');
const router = express.Router()
router.get('/getCourses/:id',DisplayLesson)
router.post('/createlesson',createLesson)
router.get('/getCourses/:id',DisplayLesson)
router.post('/createcourse',createCourse)
router.delete('/delete/:id' ,deleteCourse),
router.put('/updateCourse/:id' ,updateCourse),
router.get('/search/:key',SearchCourse),
module.exports = router