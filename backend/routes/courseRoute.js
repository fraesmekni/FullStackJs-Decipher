
const express = require('express');
const { DisplayLesson, createCourse, createLesson } = require('../Controllers/courseController');
const router = express.Router()
router.get('/getCourses/:id',DisplayLesson)
router.post('/createcourse',createCourse)
router.post('/createlesson',createLesson)


module.exports = router