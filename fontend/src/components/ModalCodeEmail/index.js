

import React from 'react';
import './ModalCodeEmail.scss';
import {AiFillCheckCircle} from 'react-icons/ai';
function ModalCodeEmail({onHideModal}) {
  return (
    <div  onClick={onHideModal} className='modal-code-email'>
            <div className='modal__email'>
                    <AiFillCheckCircle className='modal__close'/>
                    <h3 className='modal__heading'>Email đăng ký thành công</h3>
                    <button onClick={onHideModal} className='btn-modal__close'>OK</button>
            </div>

    </div>
  )
}

export default ModalCodeEmail