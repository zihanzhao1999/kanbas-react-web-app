import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (

  <div>
      <h1>Dashboard</h1>
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
                <i className="fas fa-pen-alt"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;