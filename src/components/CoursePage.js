import React, { useState,useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import {Link} from 'react-router-dom';

function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect( ()=> {
    const courseApi = async ()=>{
        const resp = await getCourses();
        setCourses(resp);
    }
    courseApi();
  }, []);
    return (
      <>
      <Link className="btn btn-primary my-2" to="/course">Add Course</Link>
      <CourseList courses={courses}/>
      </>
    );
  }

export default CoursePage;
