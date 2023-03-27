
const express = require('express');
const { DisplayLesson, createCourse } = require('../Controllers/courseController');
const router = express.Router()
router.get('/getCourses/:id',DisplayLesson)
router.post('/createcourse',createCourse)

module.exports = router