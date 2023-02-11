import React, { useState,useEffect } from "react";
import CourseList from "./CourseList";
import {Link} from 'react-router-dom';
import store from '../flux-management/stores/courseStore'
import * as courseActions from '../flux-management/actions/courseActions'

function CoursePage() {
  const [courses, setCourses] = useState(store.getCourses());

  useEffect( ()=> {
        store.addChangeListner(listenChange);
        if(store.getCourses().length === 0) courseActions.loadCourse();
        return ()=> store.removeChangeListner(listenChange);
      }, []);

  function listenChange(){
     setCourses(store.getCourses())
  }

    return (
      <>
      <Link className="btn btn-primary my-2" to="/course">Add Course</Link>
      <CourseList courses={courses}/>
      </>
    );
  }

export default CoursePage;
