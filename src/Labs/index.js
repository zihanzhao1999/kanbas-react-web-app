
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
 return (
  <Provider store={store}>

<div className="container">

     <Nav/>
     <Assignment3/>
     <Assignment4/>

   </div>
   </Provider>

 );
}
export default Labs;