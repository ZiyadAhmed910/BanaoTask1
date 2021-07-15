import React from "react";
import { NavDropdown } from "react-bootstrap";

function BarMob() {
  return (
    <div>
      <div className="content-nav-mob mt-3 ml-3 ">
        <p>Posts(368)</p>

        <div className="ml-auto mr-4 filter-mob">
          <NavDropdown
            title="Filter: All   "
            id="basic-nav-dropdown"
            className="nav-top-bar"
          >
            <NavDropdown.Item>Article</NavDropdown.Item>
            <NavDropdown.Item>Event</NavDropdown.Item>
            <NavDropdown.Item>Education</NavDropdown.Item>
            <NavDropdown.Item>Job</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}

export default BarMob;
