const Course = require('../models/course');
const Lesson = require('../models/lesson');

const createCourse = async (req, res) => {
    const {  
        titleCourse ,
        descriptionCourse , 
        category , 
        coach ,
      } = req.body
  try {
    // create a new course
    const course = new Course({
        titleCourse : req.body.titleCourse ,
        descriptionCourse: req.body.descriptionCourse,
        coach: req.coach._id
    });
    
    // create a new lesson
    const lesson = new Lesson({
      titleLesson:"title",
      descriptionLesson:"description",
      contentLesson: "content",
      course: course._id
    });
    
    // save the lesson to the database
    await lesson.save();
    
    // add the lesson to the course's lessons array
    course.lessons.push(lesson);
    
    // save the course to the database
    await course.save();

    res.status(201).json({ course, lesson });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


const createLesson = async(req,res)=>{
    const { titleLesson,
        descriptionLesson,
         contentLesson,course}= req.body
         try {    
            // create a new lesson
            const lesson = new Lesson({
              title: req.body.lessonTitle,
              description: req.body.lessonDescription,
              content: req.body.lessonContent,
              course: course._id
            });

            await lesson.save();
    
            // add the lesson to the course's lessons array
            course.lessons.push(lesson);
            
            // save the course to the database
            await course.save();
        
            res.status(201).json({ course, lesson });
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
          }
        };

module.exports={
    createCourse
}