
import React, { useState } from 'react';
import { useRef } from 'react';
import './Footer.scss';
import {HiOutlineMail} from 'react-icons/hi';
import ModalCodeEmail from '../ModalCodeEmail';

function Footer() {
  const [showModalEmail ,setShowModelEmail] = useState(false);
  const emailRef = useRef();
  const handleSubmit = (e) => {
    var message = document.querySelector('.footer__form-message');
    e.preventDefault();
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   let checkEmail = re.test(emailRef.current.value.trim());
    if(checkEmail){
      emailRef.current.value = "";
      setShowModelEmail(true);
      message.classList.remove('invalid');
      message.innerText= "";
    }else{
      if(emailRef.current.value.trim()) {
        message.classList.add('invalid');
        message.innerText= "Vui lòng nhập đúng định dạng email  ";
        //
      }else{
        message.classList.add('invalid');
        message.innerText= "Vui lòng nhập email!";
      }
    }
  }
  const onHideModal = () => {
    setShowModelEmail(false);
  }
  const handeChange = ( ) => {
    var message = document.querySelector('.footer__form-message');
    message.classList.remove('invalid');
    message.innerText= "";
  }
  return (
    <div className='footer'>
        <div className='footer__email'>
            <h3 className='footer__email-header'> 
            <HiOutlineMail className='footer__email-icon' />
            Đăng ký nhận code</h3>
            <form method='POST' action='' className='footer__search'>
               <input ref={emailRef}  onChange={handeChange} type="email" placeholder='Địa chỉ email của bạn'  className='register-email' id="register-email" name="register-email"/>
               <button onClick={handleSubmit} type='submit' className="footer__btn-register">Đăng ký</button>
               <span className='footer__form-message'></span>
            </form>
            <div className='footer__voucher'>
                <p>...Nhận ngay <span>VOUCHER 100K</span> từ chúng tôi</p>
            </div>
        </div>
        <div className='footer__bottom'>
            <div className='footer__left'>
            <img className='footer__left__img' src='https://kingshoes.vn/data/upload/media/cua-hang-giay-sneaker-chinh-giay-uy-tin-nhat-den-king-shoes-authenti-hcm-2-1624430336.png' alt='Logo'/>
            <h4>Thông tin liên hệ</h4>
            
        
            </div>
            <div className='footer__center'>

            </div>
            <div className='footer__right'>

            </div>

          </div>
         { showModalEmail && <ModalCodeEmail onHideModal={onHideModal} />}
    </div>
  )
}

export default Footer