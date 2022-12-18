

import React from 'react';
import { listMenu } from '../../assets/listMenu';
import './Sidebar.scss';
import SideBarMenu from '../SideBarMenu';
function SideBar({show }) {
    const classSidebar = ['sidebar'];
    if(show) {
        classSidebar.push('show');
    }
  return (
    <div className={classSidebar.join(' ')}>
      <SideBarMenu listMenu={listMenu}  />
    </div>
  )
}

export default SideBar