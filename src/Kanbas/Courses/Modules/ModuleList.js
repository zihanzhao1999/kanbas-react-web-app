import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import {createModule , findModulesForCourse } from "./client";

function ModuleList() {


  const modules = useSelector((state) => state.modulesReducer.modules);
  const moduleRed = useSelector((state) => state.modulesReducer.module);
  const [module, setModule] = useState({...moduleRed});
  const dispatch = useDispatch();

  const handleUpdateModule = async (module) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);




  // const modules = db.modules;
  return (
    <ul className="list-group">


    <li className="list-group-item">

    {/* <button className="btn btn-success" onClick={() => dispatch(addModule(module))}>
      Add
    </button> */}
    <button
          onClick={handleAddModule}>
          Add
        </button>

    {/* <button className="btn btn-success" onClick={() => dispatch(updateModule(module))}>
      Update
    </button> */}
    <button
          onClick={()=>handleUpdateModule(module)}>
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


      {modules && modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">

            {/* <button className="btn btn-success"
              onClick={() => dispatch(setModule(module))}>

              Edit
            </button> */}
            <button  className="btn btn-success"
              onClick={() => setModule(module)}
            >
              Edit
            </button>

            {/* <button className="btn btn-success"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button> */}
            <button  className="btn btn-success"
              onClick={() => handleDeleteModule(module._id)}
            >
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