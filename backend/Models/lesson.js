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
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;