import React from 'react';

function CourseList(props) {
    return (
        <>
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
                {props.courses.map(course => {
                    return <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </>
    );
}

export default CourseList;