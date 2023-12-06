import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-stia.onrender.com/api/courses";

const MODULES_URL = "https://kanbas-node-server-app-stia.onrender.com/api/modules";
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
   // console.log(`${MODULES_URL}/${module._id}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.
    put(`${MODULES_URL}/${module._id}`, module);
    // console.log(`${MODULES_URL}/${module._id}`);
  return response.data;
};


export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
