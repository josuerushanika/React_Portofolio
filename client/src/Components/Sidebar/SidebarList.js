import React from 'react'
import "./SidebarList.css";
import profilepic from "../../images/jojo.jpg"

const SidebarList = () => {
  return (
    <React.Fragment>
        <div className='navbar-items'>

            <div className='sidebar-profile-pic'>
                     <img src={profilepic}/>
            </div>

        </div>

    </React.Fragment>
  )
}

export default SidebarList