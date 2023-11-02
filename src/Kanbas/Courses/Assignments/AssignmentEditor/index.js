import React, { useState, useEffect } from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveAssignment} from '../assignmentsReducer';

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  //   (assignment) => assignment._id === assignmentId
  // );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignment = useSelector(state => 
    state.assignmentsReducer.assignments.find(a => a._id === assignmentId)
  ) || {
    title: "",
    description: "",
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: ""
  };

   const [editedAssignment, setEditedAssignment] = useState(assignment);

  useEffect(() => {
    setEditedAssignment(assignment);
  }, [assignment]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAssignment(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    
    if (!assignmentId || assignmentId === 'new') {
      dispatch(saveAssignment({ ...editedAssignment, _id: undefined })); 
    } else {
      dispatch(saveAssignment(editedAssignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


return (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <h2>Edit Assignment</h2>
    <form>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          id="assignmentTitle"
          name="title"
          value={editedAssignment.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          id="assignmentDescription"
          name="description"
          rows="3"
          value={editedAssignment.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          id="assignmentDueDate"
          name="dueDate"
          value={editedAssignment.dueDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Available From Date</label>
        <input
          type="date"
          className="form-control"
          id="assignmentAvailableFromDate"
          name="availableFromDate"
          value={editedAssignment.availableFromDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="assignmentAvailableUntilDate">Available Until Date</label>
        <input
          type="date"
          className="form-control"
          id="assignmentAvailableUntilDate"
          name="availableUntilDate"
          value={editedAssignment.availableUntilDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group text-right mt-3">
        <button type="button" className="btn btn-secondary mr-2" onClick={handleCancel}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>
    </form>
  </div>
);
}
export default AssignmentEditor;