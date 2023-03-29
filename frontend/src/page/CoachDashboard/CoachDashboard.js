import "./CoachDashboard.css"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import SpecialButton from "../../Components/Button/button";
import { useDispatch , useSelector , } from "react-redux";
import {addCourse, addLesson} from "../../coursereduc/courseActions"
import { ArrowWrapperLeft, ArrowWrapperRight } from "../../Components/Arrows/Arrows";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import Swal from 'sweetalert2';


function CoachDashboard(){
    const userLogin = useSelector(state => state.userLogin)
    const addCourses = useSelector(state => state.addCourse)
    const { loading, error,messageSuccess } = addCourses;

    const {userInfo } = userLogin
    const [showCreate, setShowCreate] = useState(false);    
    const [ titleCourse, setTitleCourse] = useState(""); 
    const [ descriptionCourse, setDescriptionCourse] = useState(""); 
    const [ category, setCategory] = useState(""); 

    const [ titleLesson, setTitleLesson] = useState(""); 
    const [descriptionLesson, setDescriptionLesson] = useState(""); 
    const [contentLesson, setContentLesson] = useState(""); 

    const [typeLesson, setTypeLesson] = useState(""); 
    const [thumbnailCourse, setThumbnailCourse] = useState(""); 
    /////////////////////
    const [course_id, setcourse_id] = useState(null);
    const [step, setStep] = useState(1);
    const [lessonQty, setLessonQty] = useState(3);
    function handleContentLessonChange(editorState) {
      setContentLesson(editorState);
    }
    //=Course=
    const [course , setCourse]= useState([])
    const getCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5000/course/courseById/${userInfo._id}`, { method: 'GET' });
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getCourse();
      
    }, [userInfo._id])

    const dispatch = useDispatch();

    const handlePrevStep = () => {
      if (step === 4) {
        setStep(1);
      } else if (step === 3) {
        setStep(1);
        if (step === 5) setStep(1);
      } else setStep((prevStep) => prevStep - 1);
    }
    //Fonction Onclick taa el next step
  
    const handleNextStep = () => {
      if (step === 4) {
        setStep(5);
      } else if (step === 3) {
        setStep(5);
      } else setStep((prevStep) => prevStep + 1);
    };
const submitNew = async (e)=>{
  e.preventDefault();
  setContentLesson("");
  setDescriptionLesson("");
  setTitleLesson("");
  setTypeLesson("");
}
console.log(thumbnailCourse);
    const submitHandlerCourse = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post('http://localhost:5000/course/createcourse', {
          titleCourse,
          descriptionCourse,
          category,
          thumbnailCourse,
          coach: userInfo._id,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
  
       setcourse_id(data.course._id); // define course_id and set it to the _id of the newly created course

        dispatch(addCourse({
          titleCourse,
          descriptionCourse,
          category,
          thumbnailCourse,
          coach: userInfo._id,
          course_id: data.course._id, // set course_id to the _id of the newly created course
        }));
       
        // define course_id and set it to the _id of the newly created course
      } catch (error) {
        console.error(error);
      }
    };
    console.log("lbara"+course_id);

    const submitHandlerLesson = async (e) => {
      e.preventDefault()
    dispatch(
      addLesson({
        titleLesson,
        descriptionLesson,
        contentLesson,
        typeLesson,
        course: course_id,
      })
    );  };
    
  const handleCreateClick = () => {
    setShowCreate(true);
  };

  const handleListClick = () => {
    setShowCreate(false);
  };
 


const handleRefresh = () => {
setTimeout(() => {
  dispatch(getCourse());
}, 1000); 
console.log("after 1 second");// Refresh after 1 seconds (adjust the number as needed)
};
//console.log(course?.lessons?.titleLesson)
  console.log(lessonQty)
    return(

        <><body  className="coach">
        <main align="center" className="mp_maincoach">
            <div style={{marginTop:"500px"}}>
           
  <div className="mp_sidebar">
    <div className="sidebar_logo">
      <img src={process.env.PUBLIC_URL + "/images/logo.png"}/>
    </div>

    <div className="sidebar_menu">
      <img onClick={handleListClick} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRIie2TMUqDQRCF34T8hdgELYVYpdAmnY05QTyCpLHzBJZioTdIo50B7YWkUSzVIs1/nghfCkdYAstOfkkh+mCbnXnvzczOSn8KwAgYbULYgHOg9nMBtCJcC4hXkq4knUha+HUlaSrp0swWOW4RwBYw9qrfgWPgCHjzuztgu6l4B5i40CtwkMR6wLPHHoHddcX3gCcXmALdQs4M2I+K94AXJz4AO4Uu75MuD0vi6XxvI/NdeacPYJBLHALzZBXbJfGE2054c2D4HWt5wqmka32tnyTJzD6jBiu5laQb4CxXTQ3UUfESLzSGnKGZ9Uvc0Hf/CdYyMLN+pOrGBk3w+w2yWxRZ1UjOxjv4RxFLW3QYbNPY/+0AAAAASUVORK5CYII=" />
      <img onClick={handleCreateClick} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAQElEQVRIiWNgGAXUBIcPHz5y+PDhI6ToYaKVY0YtGLWAeoARmUNqGscFbG1tbWBsmvuAJDCak0ctGKYWjAKCAAB8yhBUbF/pJwAAAABJRU5ErkJggg==" />
    </div>
    <div className="sidebar_logout">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACAklEQVRoge2ZP2tUQRTFfydEwfULJCpY5ANYqa1FlECwUhArIU0QrG1SaKG9RZZ0EWtBUEQQBC39A8GPYCEkRYqNkigYcizegMsSzMzbu3nN/JrLwpvzzr0zs+++eVCpVCqVMVCUkO0p4AZwAZhuIbEPfAVeSDqI8pWFbdl+5Rhe2s4ubMgM2F4EXgObQJ+mmqVMA/eAGWBR0psIb1nYXknVezSmzuOks5I7ZmqcGw5xIsU2lR/mz4jekUQl0Bk1ga6pCST2UtwN0sumzRPzMNaAbeB5kF42IQlI+gmsR2iV0noJ2T5r+6HtmUhDpbSaAdvngA/AHDAAnkSaKqF4BkbMfwGeRpsqoSiBZP49jfkNYEHSziSM5ZK9hGyf4V/lD2iqf992rsQ+sCppq9Tk/yjZA7dozEMzc8st7rdN8H4pSWAduA1cTL9Xge8F43eBZwXXZ5GdgKQd21eBt8Bl4DpwRdK3aFMlFG3itGEXaNb/eeCd7dlJGMul+G9U0gC4RpPEHM3e6IxWDzJJA9vzwE066H+Gad0LSfpBR/3PMCHttO3ZrvqiqPeBJeBBisdK9KnEySC9bOorZdfUBLomKoHfKZ4aU6eX4q/cAVGnEh9TvGu7R7vjldPAnRG948N2P+j7QL/kvmFfaFISl2ha7d5R1x7CHvBJ0udIT5VKpTJZ/gIArCTzj9YnhAAAAABJRU5ErkJggg==" />
    </div>
  </div>
  <div className="mp_library">
    <div className="library_search">
      <div className="searchbar">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABxElEQVRIidWUv27UQBCHv1m7ubsUpCf0EY9wXh/HKyBFugaq0PAEFKmQ8gKIhj9NhHSRDvEKR7y+gheAPtCeghRSIMs7FLeGBBzbR4IQv2bs0fzm2x2vF/53SV3SObcpIjtAoqpbIX0cRVFeluXMWnvyx4DFYnHXe78H9GsNImfAkyRJ5msDQvP9VR858t4fxnH8MTTeLopiIiKpiHhVfWytfdcZ4JzbBN4CfWPM0+Fw+LrO4Jy7DzwSka9FUdwbj8dfmgDmB2k1876IHF3WHMBaewA4Vd2I43inbQfm3LMF8N4ftpmAaYhJZ4Cq3gSoZt6kXq9X1Ww1FnJxB9pWXGm5XNYe70aAiHwOcbvNNBgMqppPnQHGGAdQFMWkzaSqkxBdZ0BZljMRORORNBzFWuV5/oDVxz0VkTdtgAuzzPN8DOyrqgEcMI2i6AOA9/52WHkS3p+PRqNXawEAnHN3RGRPVTcu8Zx676fGmIcAqvoyTdMXnQEA8/n8RviJEuBWSB8DOTCz1p44595X9U2QzsftV1VXxrnUgbX22bUBukKuBOgCuTKgDWLqLesp3LA/Vy3y7Tr6/qYsy3azLNv9K83/mb4D+s23Z1Qya+gAAAAASUVORK5CYII=" />
      </div>
    </div>
   
    <div
        id="create"
        className={`create ${showCreate ? "show" : "hide"} ${showCreate ? " library_trending_coach_create" : ""}`}
      >   
      <div style={{marginLeft:"300px"}}> <ArrowWrapperLeft 
            onClick={handlePrevStep}
            disabled={step === 1}
          /></div>
          <div style={{marginLeft:"500px"}}>
          <ArrowWrapperRight
            onClick={handleNextStep}
            
          /></div>
        <h3 align="center" className="library_trending_title">Add A Course In three Simple Steps!</h3>
        {step === 1 && ( <>
 
 <h3 align="center" className="library_trending_title">Step 1 : Course description </h3>
<input type="text" placeholder="Course name" id="Cname"   value={titleCourse}
                onChange={(e) => setTitleCourse(e.target.value)}></input>
          <input type="text" placeholder=" Category"  value={category}
                onChange={(e) => setCategory(e.target.value)}></input>
                
          <input type="text" placeholder="What is this course about?"  value={descriptionCourse}
                onChange={(e) => setDescriptionCourse(e.target.value)}></input>
                <input type="file" name="thumbnailCourse" 
                onChange={(e) => setThumbnailCourse(e.target.files[0])}></input>
                <SpecialButton name="Create" onClick={submitHandlerCourse} type="submit"/> 
                </> )}
                
                 {step === 2 && ( <>
 
 <h3 align="center" className="library_trending_title">Step 2 : Add A course ! </h3>

 <input type="text" placeholder="Lesson name" id="Lname"   value={titleLesson}
                onChange={(e) => setTitleLesson(e.target.value)}></input>
                       <input type="text" placeholder=" Category"  value={typeLesson}
                onChange={(e) => setTypeLesson(e.target.value)}></input>
                                       <input type="text" placeholder="Content"  value={contentLesson}
                onChange={(e) => setContentLesson(e.target.value)}></input>
                 {/* <Editor
      editorState={contentLesson}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={handleContentLessonChange}
    /> */}
          
          <input type="text" placeholder="What is this course about?"  value={descriptionLesson}
                onChange={(e) => setDescriptionLesson(e.target.value)}></input> <SpecialButton name="Create" onClick={submitHandlerLesson} type="submit"/>
        <SpecialButton name="Add another one" onClick={submitNew} type="submit"/>         </> )}
        

 </div>



    <div id="list"        className={`create ${!showCreate ? "show" : "hide"} ${!showCreate ? "library_trending" : ""}`}
>      
<h3 className="library_trending_title">Your Courses</h3>

      <table>
      {course && course.map((i , index) => {
           return(
        <tr key={i.id}>
          <td>
            <p>{index + 1}</p>
          </td>
          
          <td className="song">
            <h4>{i.titleCourse}</h4>
            <p> {i.descriptionCourse}</p>
          </td>
          <td>
            <p>{i.category}</p>
          </td>
          <td>
            <p>{i.DateCourse}</p>
          </td>
          <td>
            <p>{i.thumbnailCourse}</p>
          </td>
          {/* <td>
            
            <p>{i?.lessons?.titleLesson}</p>
          </td> */}
         
          <td>
          <lord-icon src="https://cdn.lordicon.com/jmkrnisz.json"
                              trigger="hover" colors="primary:#ffffff" onClick={() => {
                                Swal.fire({
                                  title: 'Do you want to Delete this Product?',
                                  showDenyButton: true,
                                  showCancelButton: true,
                                  confirmButtonText: 'Save',
                                  denyButtonText: `Don't save`,
                                }).then((result) => {
                                  if (result.isConfirmed ) {
                                   
                                    handleRefresh();
                                    Swal.fire('Product Deleted!', '', 'success');
                                  } else if (result.isDenied) {
                                    Swal.fire('Product is not Deleted', '', 'info');
                                  }
                                });
                              }}>                   
            </lord-icon>
          
                 </td>
          <td>
          <FontAwesomeIcon icon={faEdit} size="xl" />          </td>
        </tr>
     )})}
      </table>
     
    
    </div>
  </div>
  
      <hr />
      </div>
</main> </body>
        </>
    )
}
export default CoachDashboard;