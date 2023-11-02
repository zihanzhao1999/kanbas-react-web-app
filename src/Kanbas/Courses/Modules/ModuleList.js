import React from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();




  // const modules = db.modules;
  return (
    <ul className="list-group">


    <li className="list-group-item">
      <button className="btn btn-success" onClick={() => { addModule(module) }}>
        Add
      </button>
      <button className="btn btn-success" onClick={updateModule}>
         Update
      </button>

      <div className="d-flex align-items-center mt-2">
        <input value={module.name}
            onChange={(e) => setModule({
                ...module, name: e.target.value })}
            className="mr-2"  />
        <textarea value={module.description}
            onChange={(e) => setModule({
                ...module, description: e.target.value })}
        />
      </div>
      </li>


      {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <button className="btn btn-success"
              onClick={() => dispatch(setModule(module))}>

              Edit
            </button>

            <button className="btn btn-success"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
             <h3>{module.name}</h3>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;