

import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
function Search({sidebarTablet}) {

    const classSearch = ['header__search'];
    if(sidebarTablet) {
        classSearch.push('sidebar-tablet');
    }
  return (
    <>
     <div className={classSearch.join(" ")}>
          <input
            className={`header__input ${sidebarTablet ? "sidebar__tablet-input" :"" }`}
            type="text"
            name="search"
            placeholder="Nhập từ cần tìm"
          />
          <AiOutlineSearch className="header__icon-search" />
        </div>
    </>
  )
}

export default Search