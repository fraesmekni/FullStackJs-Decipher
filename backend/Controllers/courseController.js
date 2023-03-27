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
        coach: req.body.coach
    });
    
    // create a new lesson
    const lesson = new Lesson({
      titleLesson:"title",
      descriptionLesson:"description",
      contentLesson: "content",
      typeLesson:"yo",
      course: course._id,

    });
    
    // save the lesson to the database
    await lesson.save();
    
    // add the lesson to the course's lessons array
    course.lessons.push(lesson);
    
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
         contentLesson,coach,course}= req.body
         try {    
            // create a new lesson
            const lesson = new Lesson({
              title: req.body.lessonTitle,
              description: req.body.lessonDescription,
              content: req.body.lessonContent,
              course: course._id,
              coach: req.coach
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

const DisplayLesson= asynHandler(async(req,res)=>{
   
    const course= await Course.findById(req.params.id) //It proceeds to find the product by its id using Product.findById()
    res.json(course)
  
});
//delete course
const deleteCourse = asynHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)
  if (course) {
    await course.remove()
    res.json("Course removed")
  } else {
    res.status(404)
    throw new Error('Course not found')
  }
})
//update course

const updateCourse = asynHandler(async (req, res) => {
  const {
    titleCourse ,
    descriptionCourse , 
    category ,
  } = req.body

  const course = await Course.findById(req.params.id)

  if (course) {
    course.titleCourse = titleCourse
    course.descriptionCourse = descriptionCourse
    course.category = category
    
    const updatedCourse = await course.save()
    res.status(201).json({
      _id: course.id,
      titleCourse: course.titleCourse,
      user : course.user,
      category: course.category,
      descriptionCourse: course.descriptionCourse
  })
  } else {
    res.status(404)
    throw new Error('Course not found')
  }
})
// search course 
const SearchCourse = asynHandler( async (req, res) => {
  const key = req.params.key;
  
  const courseResults = await Course.find({
    $or: [
      { titleCourse: { $regex:  new RegExp(key, 'i')  } },
      { category: { $regex:  new RegExp(key, 'i')  } },
      { descriptionCourse: { $regex:  new RegExp(key, 'i')  } },
    ],
  });

  const results = courseResults;
  
  res.send(results);
});


module.exports={
  createCourse,createLesson,DisplayLesson,deleteCourse,updateCourse,SearchCourse
}