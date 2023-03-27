const mongoose = require('mongoose');
const lessonSchema = new mongoose.Schema({
  titleLesson: {
    type: String,
    required: true
  },
  descriptionLesson: {
    type: String,
    required: true
  },
  contentLesson: {
    type: String,
    required: true
  },
  typeLesson:{
    type: String,
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });
const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number,  },
      comment: { type: String,  },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    },
  )
const courseSchema = new mongoose.Schema({
  titleCourse: {
    type: String,
    required: true
  },  
  category: {
    type: String,
  },
  descriptionCourse: {
    type: String,
    required: true
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach',
  },
  DateCourse: {
    type: Date,
    default: Date.now
  },
  reviews: [reviewSchema],
  lessons: [lessonSchema]

}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;