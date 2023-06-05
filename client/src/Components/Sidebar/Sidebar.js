import React, { useState } from 'react';
import './Sidebar.css';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Home from '../Home/Home';
import SidebarList from './SidebarList';

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">

      <div className={expandSidebar ? 'sidebar-expand sidebar' : 'sidebar'}>

        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleExpandClick}>

            {expandSidebar ? (
              <BsChevronCompactLeft size={30} />
            ) : (
              <BsChevronCompactRight size={30} />
            )}

          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className="container">
        <Home />
      </div>

    </div>
  );
};

export default Sidebar;
