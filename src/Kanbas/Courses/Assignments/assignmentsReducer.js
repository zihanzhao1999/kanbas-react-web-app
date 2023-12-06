import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";





const initialState = {
  assignments: db.assignments || [], 
  assignment: { 
    title: "",
    description: "",
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: ""
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: {
      reducer: (state, action) => {
        state.assignments.push(action.payload);
      },

    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    saveAssignment: (state, action) => {
      const index = state.assignments.findIndex((assignment) => assignment._id === action.payload._id);
      if (index !== -1) {
        state.assignments[index] = action.payload; 
      } else {
        state.assignments.push({ ...action.payload, _id: new Date().getTime().toString() }); 
      }
    },
    
  
  },
});

export const { addAssignment, deleteAssignment, saveAssignment, setAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
