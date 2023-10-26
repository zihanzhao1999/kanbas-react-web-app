import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className="flex-grow-1">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#">Fall 2023</a></li>
          <li className="breadcrumb-item"><a href="#">section 1</a></li>
          <li className="breadcrumb-item active" aria-current="page">Assignments</li>
        </ol>
      </nav>

      <div className="d-flex justify-content-between mb-3">
        <input type="text" className="form-control me-4" placeholder="Search For Assignments"/>

        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-secondary btn-sm me-2" style={{ height: "38px", whiteSpace: "nowrap" }}><i className="fas fa-plus"></i> Group</button>
          <button type="button" className="btn btn-danger btn-sm me-2" style={{ height: "38px", whiteSpace: "nowrap" }}><i className="fas fa-plus"></i> Assignments</button>

          <div className="btn btn-sm dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item" value="1">drop1</button>
              <button className="dropdown-item" value="2">drop2</button>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group">
        <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
          <div className="fw-bold">ASSIGNMENTS</div>
          <span><div className="rounded border border-secondary p-1">40% of Total</div></span>
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
