import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch} from "react-redux";
import {
  deleteAssignment,
} from "./assignmentsReducer";


function Assignments() {
  const { courseId } = useParams();
  // const assignments = db.assignments;
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  // const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`); 
  };
  const handleEditAssignment = (assignmentId) => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`);
  };

  


  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
          {/* <button type="button" className="btn btn-danger btn-sm me-2" style={{ height: "38px", whiteSpace: "nowrap" }}  onClick={() => dispatch(addAssignment(assignment))}><i className="fas fa-plus"></i> Add Assignment</button> */}
          <button type="button" className="btn btn-danger btn-sm me-2" style={{ height: "38px", whiteSpace: "nowrap" }} onClick={handleAddAssignment}><i className="fas fa-plus"></i>
          + Assignment
        </button>

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



      <div className="list-group">
       {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="flex-grow-1 mr-2">
            <div>{assignment.title}</div>
              </Link>
            <button className="btn btn-success" onClick={() => dispatch(deleteAssignment(assignment._id))}>
             Delete
            </button>
            <button className="btn btn-secondary mr-2" onClick={() => handleEditAssignment(assignment._id)}>
                Edit
              </button>
   
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#5ec15b', marginRight: '5px' }} />
            <FontAwesomeIcon icon={faEllipsisV} />
            </li>
        ))}
        </div>


      </div>

    





    </div>
  );
}

export default Assignments;


