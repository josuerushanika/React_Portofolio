import React from 'react';
import './SidebarList.css';
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,

} from 'react-icons/fc';

import { MdBiotech, MdCastForEducation } from 'react-icons/md';
import profilepic from '../../images/jojo.jpg';

const SidebarList = ({ expandSidebar }) => (
  <>

    {expandSidebar ? (

      <div className="navbar-items">

        <div className="sidebar-profile-pic">
          <img src={profilepic} alt="profile picture" />
        </div>

        <ul>
          <li className="nav-item">
            {' '}
            <FcHome size={25} />
            {' '}
            Home
          </li>
          <li className="nav-item">
            {' '}
            <FcNightPortrait size={25} />
            {' '}
            About
          </li>
          <li className="nav-item">
            {' '}
            <FcFactory size={25} />
            {' '}
            Work Experience
          </li>
          <li className="nav-item">
            {' '}
            <MdBiotech color="orange" size={25} />
            {' '}
            Tech Stack
          </li>
          <li className="nav-item">
            {' '}
            <MdCastForEducation size={25} />
            {' '}
            Education
          </li>
          <li className="nav-item">
            {' '}
            <FcTodoList size={25} />
            {' '}
            Projects
          </li>
          <li className="nav-item">
            {' '}
            <FcSalesPerformance size={25} />
            {' '}
            Testimonial
          </li>
          <li className="nav-item">
            {' '}
            <FcContacts size={25} />
            {' '}
            Contact
          </li>
        </ul>

      </div>

    ) : (
      <div className="navbar-items-only-icons">
        <ul>
          <li className="nav-item">
            {' '}
            <FcHome size={25} />
            {' '}
          </li>
          <li className="nav-item">
            {' '}
            <FcNightPortrait size={25} />
            {' '}
          </li>
          <li className="nav-item">
            {' '}
            <FcFactory size={25} />
          </li>
          <li className="nav-item">
            {' '}
            <MdBiotech color="orange" size={25} />
            {' '}
          </li>
          <li className="nav-item">
            {' '}
            <MdCastForEducation color="white" size={25} />
            {' '}
          </li>
          <li className="nav-item">
            {' '}
            <FcTodoList size={25} />
            {' '}
          </li>
          <li className="nav-item">
            {' '}
            <FcSalesPerformance size={25} />
            {' '}
          </li>
          <li className="nav-item">
            {' '}
            <FcContacts size={25} />
            {' '}
          </li>
        </ul>
      </div>
    )}
  </>
);

export default SidebarList;
