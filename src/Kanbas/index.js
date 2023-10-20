// import KanbasNavigation from "./KanbasNavigation";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Courses from "./Courses";



// function Kanbas() {
//   return (

//     <div className="d-flex">

//       <KanbasNavigation />
//       <div className="container">

//         <Routes>
//           <Route path="/" element={<Navigate to="Dashboard" />} />
//           <Route path="Account" element={<h1>Account</h1>} />
//           <Route path="Dashboard" element={<Dashboard/>} />
//           <Route path="Courses/:courseId/*" element={<Courses/>} />
//           <Route path="Calendar" element={<h1>Calendar</h1>} />
//           <Route path="Inbox" element={<h1>Inbox</h1>} />
//           <Route path="History" element={<h1>History</h1>} />
//           <Route path="Studio" element={<h1>Studio</h1>} />
//           <Route path="Commons" element={<h1>Commons</h1>} />
//           <Route path="Help" element={<h1>Help</h1>} />

//         </Routes>
//       </div>
//     </div>
//   );
// }
// export default Kanbas;


import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1">
          <KanbasNavigation />
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Commons" element={<h1>Commons</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Kanbas;
