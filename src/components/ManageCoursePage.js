import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import CourseForm from './CourseForm';
import * as CourseActions from '../flux-management/actions/courseActions'
import CourseStore from '../flux-management/stores/courseStore'
import {getCourseBySlug} from '../api/courseApi'

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id:null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  }) 
  
  const [erros, setErrors] = useState({});

  useEffect(()=>{
    const slug = props.match.params.slug;
    const _getCourseBySlug = async ()=>{
      try{
        const resp = await getCourseBySlug(slug);
        setCourse(resp);
      } catch(e) {
          toast.error(e);        
      }
    }
    if(slug){
      _getCourseBySlug();
    }
  },[props.match.params.slug]);

   function handleChange(event){
   // console.log(event);
    // it will copy the course object and modify the title property
    const updatedCourse = {...course, [event.target.name]: event.target.value};
    setCourse(updatedCourse);
    console.log(course)
  }

  function formIsValid(){
    const _errors = {};
    if (!course.title) _errors.title = "Title is req";
    if (!course.authorId) _errors.authorId = "Author is req";
    if (!course.category) _errors.category = "Category is req";

    setErrors(_errors);

    return Object.keys(erros).length === 0;
  }

  async function handleSubmit(event){
    if(!formIsValid()) return;
    event.preventDefault();
    try{
      await CourseActions.saveCourse(course);
      props.history.push("/courses");
      toast.success("Course saved")
    } catch(e) {
      toast.error(e);
    }
  }

  return (
        <>
           <h2>Manage Courses</h2>
           <CourseForm course={course} onChange={handleChange} submitForm={handleSubmit} errors={erros}/>  
        </>
    );
}

export default ManageCoursePage;