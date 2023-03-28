const Course = require('../models/course');
const Lesson = require('../models/lesson');
const asynHandler = require("express-async-handler")
const createCourse= asynHandler(async (req, res) => {
    const {  
        titleCourse ,
        descriptionCourse , 
        category , 
        coach ,
        
      } = req.body;
      const thumbnailCourse = req.file ? req.file.filename : null;

       
  try {  
    // create a new course
    const course = new Course({
        titleCourse : titleCourse ,
        descriptionCourse: descriptionCourse,
        category: category,
        coach: coach,
        thumbnailCourse:thumbnailCourse
    });
    
    // save the course to the database
    await course.save();

    res.status(201).json({ course });
  } catch (err) {
    console.error(err);
    res.json({"message":"Server Error"}).status(400)
    throw new Error('Server Error')  }
})

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