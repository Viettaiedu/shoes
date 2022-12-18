

import React from 'react'

import './BackDrop.scss';
function BackDrop({children , show , onClickHideSideSidebar}) {
    const classBackDrop = ['backdrop'];

    const hanleShow = async () => {
       await setTimeout(() => {
            classBackDrop.push('show');
       },500)
    }
    if(show) {
        hanleShow();
    }
  return (
    show && <div className={classBackDrop.join(" ")} onClick={onClickHideSideSidebar}> {children}</div>
  )
}

export default BackDrop