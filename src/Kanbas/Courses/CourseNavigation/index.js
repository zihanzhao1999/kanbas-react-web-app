import { Link, useParams, useLocation } from "react-router-dom";
import './coursenav.css';
function CourseNavigation() {
  const links = [  "Home",  "Modules",  "Piazza",  "Zoom Meetings",  "Assignments",  "Quizzes",  "Grades",  "People",  "Panopto Video",  "Discussions",  "Announcements",  "Pages",  "Files",  "Rubrics",  "Outcomes",  "Collaborations",  "Syllabus",  "Settings"]
  ;
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="course-nav-list-group list-group" style={{ width: 150 }} >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;