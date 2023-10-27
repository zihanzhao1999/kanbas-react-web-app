// import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../../Database";


// function AssignmentEditor() {
//   const { assignmentId } = useParams();
//   const assignment = db.assignments.find(
//     (assignment) => assignment._id === assignmentId);


//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const handleSave = () => {
//     console.log("Actually saving assignment TBD in later assignments");
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//   };
//   return (
//     <div>
//       <h2>Assignment Name</h2>
//       <input value={assignment.title}
//              className="form-control mb-2" />
//       <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
//             className="btn btn-danger">
//         Cancel
//       </Link>
//       <button onClick={handleSave} className="btn btn-success me-2">
//         Save
//       </button>
//     </div>
//   );
// }


// export default AssignmentEditor;

import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" />

      <div className="row mb-3">
        <div className="col-2">
          <label htmlFor="SubmissionAttempts" className="form-label">Submission Attempts:</label>
        </div>
        <div className="col-10">
          <select id="SubmissionAttempts" className="form-control">
            <option value="Unlimited">Unlimited</option>
            <option value="limited">Limited</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-2">
          <label htmlFor="PlagiarismReview" className="form-label">Plagiarism Review:</label>
        </div>
        <div className="col-10">
          <select id="PlagiarismReview" className="form-control">
            <option value="None">None</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <label>Group Assignment:</label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="chkbox-GroupAssignment" defaultChecked />
            <label className="form-check-label" htmlFor="chkbox-GroupAssignment">This is a group assignment</label>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <label>Peer Review:</label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="chkbox-PeerReview" defaultChecked />
            <label className="form-check-label" htmlFor="chkbox-PeerReview">Require Peer Review</label>
          </div>
        </div>
      </div>

      <div className="row mb-3 align-items-start">
        <div className="col-md-2">
          <label>Assign:</label>
        </div>
        <div className="col-md-10">
          <div className="card">
            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="text-fields-username">Assign to:</label>
                <input id="text-fields-username" className="form-control" placeholder="Everyone" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="text-fields-due">Due:</label>
                <input type="date" className="form-control" id="text-fields-due" defaultValue="2023-01-01" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="text-fields-ava">Available From:</label>
                <input type="date" className="form-control" id="text-fields-ava" defaultValue="2023-01-01" />
              </div>
              <div className="col-md-6">
                <label htmlFor="text-fields-unt">Until:</label>
                <input type="date" className="form-control" id="text-fields-unt" defaultValue="2023-01-01" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 text-secondary text-center">
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-6">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary text-decoration-none text-white">
            Cancel
          </Link>
        </div>
        <div className="col-6 text-end">
          <button onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
