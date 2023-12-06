
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser, 
  faCompass, 
  faBook, 
  faEnvelope, 
  faDesktop, 
  faSignOutAlt, 
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import './navigation.css';
import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
  const links = [
    { name: "Account", icon: faUser, route: "Account" },
    { name: "Dashboard", icon: faCompass, route: "Dashboard" },
    { name: "Courses", icon: faBook, route: "Courses" },
    { name: "Signin", icon: faSignOutAlt, route: "Signin" },
    { name: "Signup", icon: faSignOutAlt, route: "Signup" },
    { name: "Calendar", icon: faCalendarAlt, route: "Calendar" },
    { name: "Inbox", icon: faEnvelope, route: "Inbox" },
    { name: "History", icon: faClock, route: "History" },
    { name: "Studio", icon: faDesktop, route: "Studio" },
    { name: "Commons", icon: faSignOutAlt, route: "Commons" },
    { name: "Help", icon: faHandshake, route: "Help" }
  ];

  const { pathname } = useLocation();
  return (
    <div className="list-group kanbas-nav">
      {links.map((link, index) => (
      <Link
        key={index}
        to={`/Kanbas/${link.route}`}
        className={`list-group-item ${pathname === `/Kanbas/${link.route}` && "active"}`}>
        <div className="nav-item-content">
          <FontAwesomeIcon className={`nav-icon ${link.colorClass}`} icon={link.icon} />
          <span className="nav-text">{link.name}</span>
        </div>
      </Link>


      ))}
    </div>
  );
}

export default KanbasNavigation;
