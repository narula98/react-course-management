import React, { useState,useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursePage() {
  const [courses, setCourses] = useState([]);
  
  useEffect( ()=>{
    const courseApi = async ()=>{
        const resp = await getCourses();
        setCourses(resp);
    }
    courseApi();
  }, []);

    return (
      <CourseList courses={courses}/>
    );
  }

export default CoursePage;
