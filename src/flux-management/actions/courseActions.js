import dispatcher from "../appDispatcher";
import * as courseApi from "../../api/courseApi";

export const saveCourse = async (course) => {
  try {
    const resp = await courseApi.saveCourse(course);
   // dispatch the action here
    dispatcher.dispatch({
      actionType: "SAVE_COURSE",
      course: resp,
    });
    return resp;
  } catch (e) {
    throw new Error(e);
  }
};
