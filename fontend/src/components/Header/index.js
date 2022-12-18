import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";

import "./Header.scss";
import routesConfig from "../../config/routes";
import logo from "../../assets/logo.png";
import defaultUser from '../../assets/default_user.jpeg';
import MenuNav from "../MenuNav";
import {listMenu} from '../../assets/listMenu';
import Search from "../Search";
import { CiSquareRemove } from "react-icons/ci";

function Header({onClickShowSidebar}) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const handleLink = (e,path) => {
    if(e.target.classList.contains('header__item') || e.target.classList.contains('header__link')){
      navigate(path)
    }
  }
  const handleShowMenuUser = () => {
      const headerUserMenu = document.querySelector('.header__user-menu');
      headerUserMenu.classList.toggle('show');
      setTimeout(() => {
        headerUserMenu.classList.remove('show');
      },5000)
  }

  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await axios.get("/api/cart");
        setCart(data);
      } catch (err) {
        console.log("ERROR", err);
      }
    };
    getCart();
  }, [cart.length]);
 
 
  const handleFixedHeader = () => {
    const header = document.querySelector('.header');
    const headerItems = document.querySelectorAll('.header__item');
     if(window.scrollY > 140) {
          let divProps = Object.assign(header.style , {
          position: "fixed",
          zIndex: 99,
          top: 0,
          left: 0,
          right: 0,
          background: '#808080e6',
        })
        headerItems.forEach(item => {
          item.style.color ="white";
        })
        delete divProps.layout;
     }else {
        if(window.screenY <140) {
          let divProps = Object.assign(header.style , {
            position: 'initial',
            zIndex: 'initial',
            top: 'initial',
            left: 'initial',
            right: 'initial',
            background: 'initial',
          })
          headerItems.forEach(item => {
            item.style.color ="initial";
          })
          delete divProps.layout;
        }
     }
  }
  useEffect(() => {
    window.addEventListener('scroll' , handleFixedHeader);
    return () => {
      window.removeEventListener('scroll' , handleFixedHeader);
    }
  },[])


  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await axios.get("/api/cart");
        setCart(data);
      } catch (err) {
        console.log("ERROR", err);
      }
    };
    getCart();
  }, [cart.length]);
  const handlePrice = (price = "", qty) => {
    var arr = price.split(",");
    if (arr.length <= 1) {
      arr = price.split(".");
    }
    var newPriceInt = "";
    arr.forEach((item) => {
      newPriceInt += item;
    });
    var priceInt = parseInt(newPriceInt);
    return priceInt * qty;
  };
  return (
    <div className="header">
      <Link className="header__logo" to={routesConfig.home}>
        <img className="header__logo__img" src={logo} alt="KINGSHOES.VN" />
      </Link>
      <MenuNav listMenu={listMenu} handleLink={handleLink}/>
      
      <div className="header__search-cart">
          <Search /> 
        <Link to={routesConfig.cart} className="header__cart">
          <BsCartPlus className="header__cart-icon" />
          <span className="header__cart-amount">{cart.length}</span>

          <Link to={routesConfig.cart}  className="header__cart-list">
              {cart.length <= 0 ? "Không có món hàng nào":(
                  cart.map(item => (
                    <div className="header__cart-item">
                  <img src={item.image} alt={item.name}/>
                  <div className="header__cart-descrip">
                      <p className="header__cart-descrip__name">{item.name}</p>
                      <div className="header__cart-descrip__size">Size : {item.size}</div>
                      <p className="header__cart-descrip__amount"><span>Số lượng</span> : {item.qty}</p>
                      <p className="header__cart-descrip__amount"><span>Thành tiền</span> : {handlePrice(
                        item.price,
                        (item.newQty = item.qty || item.qty)
                      ).toLocaleString("en-AU")} đ</p>
                  </div>
              </div>
                  ))
              )}
             
             
             
             
             
          </Link>
        </Link>
        <div className="header__menu-toggle" onClick={onClickShowSidebar}>
          <AiOutlineMenu />
        </div>
        <div className="header__user"  onClick={handleShowMenuUser}>
        <img className="header__user-img" src={defaultUser} alt="USER"/>

              <div className="header__user-menu">
                    <Link className="header__user-link" to={routesConfig.dangnhap}>
                      Đăng nhập
                    </Link>
                    <Link className="header__user-link" to={routesConfig.dangki}>
                      Đăng ký
                    </Link>
              </div>
      </div>
      </div>

      
    </div>
  );
}

export default Header;
