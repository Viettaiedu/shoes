import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.scss";
import { CiSquareRemove } from "react-icons/ci";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Zalo from "../../components/Zalo";
import routesConfig from "../../config/routes";
function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
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
  // const handlePriceToString = (price = 45000000) => {
  //     var arr = [...Array(price).keys()];
  //     // console.log(arr)
  // }
  // handlePriceToString();
  handlePrice();
  useEffect(() => {
    const cartTotal = cart.reduce(
      (sum, item) => sum + handlePrice(item.price, item.qty),
      0
    );
    if (cartTotal !== total) {
      setTotal(cartTotal);
    }
  }, [cart.length ,total]);

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
 
  // const handleAddProductToCart = (id, qty) => {
  //   var form = document.forms["add-product-to-cart"];
  //   var inputId = form.querySelector('input[name="id"]');
  //   var qtyId = form.querySelector('input[name="qty"]');
  //   inputId.value = id;
  //   qtyId.value = qty;
  //   form.action = "/api/cart";
  //   // form.submit();
  // };

  const handleDeleteProductFromCart = (id) => {
    var form = document.forms['remove-product-from-cart'];
    var inputId = form.querySelector('input[name="id"]');
    inputId.value = id;
    form.action = `/api/cart/${id}?_method=DELETE`;
    form.submit();
  }

  return (
    <>
      <div className="cart">
        <h3 className="cart__heading">Giỏ hàng</h3>
        {cart.length <= 0
          ? ""
          : cart.map((item, index) => (
              <div key={index} className="cart__shopping">
                <img
                  className="cart__shopping__img"
                  src={item.image}
                  alt={item.name}
                />
                <div className="cart__shopping__description">
                  <h4 className="cart__shopping__name">{item.name}</h4>
                  <p className="cart__shopping__size">
                    Size Giày : {item.size}
                  </p>
                  <p className="cart__shopping__ma-sp">
                    Mã SP : <span> {item.id}</span>
                  </p>
                  <div className="cart__shopping__qty">
                    <button
                      className="cart__shopping__decrease none"
                      onClick={(e) => {

                      }}
                    >
                      -
                    </button>
                    <span className="cart__shopping__amount">
                     SL: {item.newQty || item.qty} cái
                    </span>
                    <button
                      className="cart__shopping__increase none"
                      onClick={(e) => {

                      }}
                    >
                      +
                    </button>
                    <span className="cart__shopping__price">
                      X {item.price} đ
                    </span>
                  </div>
                  <div>
                    <h3 className="cart__shopping__total">
                      Thành tiền :{" "}
                      {handlePrice(
                        item.price,
                        (item.newQty = item.qty || item.qty)
                      ).toLocaleString("en-AU")} đ
                    </h3>
                  </div>
                </div>
                <button className="cart__shopping__delete" onClick={() => handleDeleteProductFromCart(item.id)}>
                  <CiSquareRemove className="cart__shopping__icon-delete" />
                </button>
              </div>
            ))}

        {cart.length <=0 ? (
          <h3>
          Bạn chưa có sản phẩm nào?
          <Link className="cart__to-product" to={routesConfig.product}>   Mua ngay.</Link>
          </h3>
        ) :(
          <div className="cart__total">
          <h3>
            Tổng tiền : <span>{total.toLocaleString("en-AU")} đ</span>
          </h3>
          <button onClick={() => navigate('/product')}>
            Mua tiếp <AiOutlineDoubleRight />
          </button>
          <button>
            Đặt hàng <AiOutlineDoubleRight />
          </button>
        </div>
        )}
      </div>
      <form   style={{ opacity: "0" }} name="add-product-to-cart" method="POST">
        <input type="text" readOnly={true}  name="id" value="" />
        <input type="text" readOnly={true} name="qty" value="" />
      </form>

      <form style={{ opacity: "0" }} name="remove-product-from-cart" method="POST">
        <input readOnly={true}  type="text" name="id" value="" />
      </form>
      <Zalo />
    </>
  );
}

export default Cart;
