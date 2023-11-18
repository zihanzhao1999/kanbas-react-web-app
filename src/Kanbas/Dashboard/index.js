
import React from "react";
import { Link } from "react-router-dom";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {


  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input 
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        placeholder="Course Name"
      />
      <input 
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        placeholder="Course Number"
      />
      <input 
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input 
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className="btn btn-success" onClick={addNewCourse}>Add</button>
      <button className="btn btn-success" onClick={()=>{updateCourse(course);
      console.log(JSON.stringify(course));}}>Update</button>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-12 col-sm-6 col-md-4 col-lg-3 course-card">
            <div className="card">
              <div className="course-image"></div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/Kanbas/Courses/${course._id}`} className="course-link">{course.name}</Link>
                </h5>
                <p className="card-text">{course.number}</p>
                <p className="card-text">{`${course.startDate} - ${course.endDate}`}</p>
                <button className="btn btn-primary mr-2" onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
