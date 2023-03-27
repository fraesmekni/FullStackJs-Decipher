const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  titleCourse: {
    type: String,
    required: true
  },  
  category: {
    type: String,
    required: true
  },
  descriptionCourse: {
    type: String,
    required: true
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach',
    required: true
  },
  reviews: [reviewSchema],
  lessons: [lessonSchema]

}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;