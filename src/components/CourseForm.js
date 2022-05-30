import React from "react";

function CourseForm(props) {
  return (
    <form onSubmit={props.submitForm}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            onChange={props.onChange}
            className="form-control"
            value={props.course.title}
          />
        </div>
        {props.errors.title && <div className="my-2 alert-danger"><p className="text-danger p-2">{props.errors.title}</p></div>}
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && <div className="my-2 alert-danger"><p className="text-danger p-2">{props.errors.authorId}</p></div>}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"            
            onChange={props.onChange}
            value={props.course.category}
          />
        </div>
        {props.errors.category && <div className="my-2 alert-danger"><p className="p-2 text-danger">{props.errors.category}</p></div>}
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
