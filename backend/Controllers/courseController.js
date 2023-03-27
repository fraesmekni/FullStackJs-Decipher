const Course = require('../models/course');
const Lesson = require('../models/lesson');
const asynHandler = require("express-async-handler")

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
        category: req.body.category,
        coach: req.body.coach
    });
    
    // save the course to the database
    await course.save();

    res.status(201).json({ course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


const createLesson = async(req,res)=>{
    const { titleLesson,
        descriptionLesson,
         contentLesson,typeLesson,course}= req.body
         try {    
            // create a new lesson
            const lesson = new Lesson({
                titleLesson: req.body.titleLesson,
                descriptionLesson: req.body.descriptionLesson,
                contentLesson: req.body.contentLesson,
                typeLesson: req.body.typeLesson,
              course: req.body.course,
            });

            await lesson.save();
            const thecourse= await Course.findById(req.body.course) ;

            // add the lesson to the course's lessons array
            thecourse.lessons.push(lesson);
            
            // save the course to the database
            await thecourse.save();
        
            res.status(201).json({ thecourse});
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
          }
        };

const DisplayLesson= asynHandler(async(req,res)=>{
   
    const course= await Course.findById(req.params.id) //It proceeds to find the product by its id using Product.findById()
    res.json(course)
  
});




module.exports={
    createCourse,createLesson,DisplayLesson
}