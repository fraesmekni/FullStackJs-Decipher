
const express = require('express');
const { DisplayLesson, createCourse,createLesson,deleteCourse,updateCourse,SearchCourse,getCourseById,getCoursesById, updateLesson,getLessonById} = require('../Controllers/courseController');
const path = require("path")
const { v4 : uuid4 } = require('uuid');
const multer = require('multer')

const router = express.Router()

 const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname, '../../frontend/public/images')); // use absolute path for uploaded files
  },
    filename: function(req, file, cb) {
      cb(null, uuid4()+ '-' + Date.now() + path.extname(file.originalname)); // specify the file name
    }
  });
  
  const fileFilter = (req,file,cb) =>{
    const allowedFileTypes = ['image/jpeg' , 'image/jpg' , 'image/png'];
    if(allowedFileTypes.includes(file.mimetype))
    {
        cb(null,true);
    } else {
        cb(null, false);
    }
  }
  // Create a new Multer upload instance
  let upload = multer({ storage, fileFilter});
  router.post('/createcourse',upload.single('thumbnailCourse'),createCourse),
router.get('/getCourses/:id',DisplayLesson),
router.post('/createlesson',createLesson),
router.delete('/delete/:id' ,deleteCourse),
router.put('/updateCourse/:id' ,upload.single('thumbnailCourse'),updateCourse),
router.put('/updateLesson/:id' ,updateLesson),
router.get('/search/:key',SearchCourse),
router.get('/:id',getCourseById),
router.get('/lesson/:id',getLessonById),
router.get('/courseById/:userId',getCoursesById)
module.exports = router
