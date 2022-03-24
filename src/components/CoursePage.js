import React, { Component } from "react";
import { getCourses } from "../api/courseApi";

class CoursePage extends Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    const resp = await getCourses();
    this.setState({ courses: resp });
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Author Id</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
                {this.state.courses.map(course => {
                    return <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    );
  }
}

export default CoursePage;
