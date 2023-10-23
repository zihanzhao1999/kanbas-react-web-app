import ModuleList from '../Modules/ModuleList';
import {Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './home.css';
function Home() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="btn-container d-flex align-items-center justify-content-end">
              <Button variant="light">Collapse All</Button>
              <Button variant="light" className="ml-2">View Progress</Button>
              <DropdownButton variant="light" className="ml-2" title="Publish All">
                <Dropdown.Item href="#">Publish One</Dropdown.Item>
              </DropdownButton>
              <Button variant="danger" className="ml-2">Module</Button>
            </div>
            <h2>Modules</h2>
            <ModuleList />
          </div>
          <div className="col-12 col-md-7 col-lg-4 listed-group-4"> 
            <h2>Course Status</h2>
            <button type="button" className="btn btn-light">Unpublish</button>
            <button type="button" className="btn btn-light">Published</button>
            <ul className="list-group-col4">
                <li className="list-group-item"><a href="#">Import Existing Content</a></li>
                <li className="list-group-item"><a href="#">Import from Commons</a></li>
                <li className="list-group-item"><a href="#">Choose Homepage</a></li>
                <li className="list-group-item"><a href="#">View Course Stream</a></li>
                <li className="list-group-item"><a href="#">New Announcement</a></li>
                <li className="list-group-item"><a href="#">New Analytics</a></li>
                <li className="list-group-item"><a href="#">View Course Notifications</a></li>
            </ul>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h2>Comming Up</h2>
                <p className="calendar"><a href="#">View Calendar</a></p>
            </div>
            <ul className="list-group-col-4-2">
                <li className="list-group-item"><a href="#">Lecture CS4550.12631.20410 Sep7 at 11:45am</a></li>
                <li className="list-group-item"><a href="#">Lecture CS4550.12631.20410 Sep11 at 11:45am</a></li>
                <li className="list-group-item"><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6 pm</a></li> 
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Home;
