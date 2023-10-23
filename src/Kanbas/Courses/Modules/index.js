import ModuleList from "./ModuleList";
import {Button, DropdownButton, Dropdown } from 'react-bootstrap';

function Modules() {
  return (
    <div className="container-fluid">
            <div className="row">

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
    </div>
  );
}
export default Modules;