import {EventEmitter} from 'events';
import dispatcher from '../appDispatcher';

const CHANGE_EVENT = 'change';

let courses = [];

class CourseStore extends EventEmitter{

    // these 3 functions are always created 
    addChangeListner(callback){
        console.log('on'+callback)
        this.on(CHANGE_EVENT,callback);
    }

    removeChangeListner(callback){
        console.log('remove'+callback)
        this.removeListener(CHANGE_EVENT,callback);
    }

    emitChangeListner(){
        this.emit(CHANGE_EVENT);
    }

    // creating getters for courses array

    getCourses(){
        return courses;
    }

    getCoursesBySlug(slug){
       return courses.find(course => course.slug === slug)
    }
}

const store = new CourseStore();

dispatcher.register((action)=>{
  switch(action.actionType) {
    case 'SAVE_COURSE':
        // setting courses array
        courses = [...courses,action.course];
        console.log('saved'+courses)
        store.emitChangeListner();
        break;
    case 'LOAD_COURSES':
        courses = action.courses;
        store.emitChangeListner();
        break;
   default:
    // nothing to do here
  }
})

export default store;