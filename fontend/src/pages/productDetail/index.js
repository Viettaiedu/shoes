import React, { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar, AiFillThunderbolt } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { TfiHandPointRight } from "react-icons/tfi";
import { GiRunningShoe } from "react-icons/gi";

import {
  FaCartPlus,
  FaTwitter,
  FaFacebook,
  FaReplyAll,
  FaPinterest,
  FaFacebookMessenger,
} from "react-icons/fa";
import { BsArrowBarRight } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

import ProductSort from "../../components/ProductSort";
import { getProductDetails , getProducts } from "../../redux/actions/productAction";
import "./productDetail.scss";
import QrCode from "../../components/Qrcode";
import Zalo from "../../components/Zalo";
import SliderProduct from "../../components/SliderProduct";
function ProductDetail() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productDetail = useSelector((state) => state.getProductDetails);
  const { loading, product } = productDetail;
  const listPr = useSelector((state) => state.getProducts);
  const {products } = listPr;
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(getProducts());
  }, [id, dispatch]);
  const handleQty = (e) => {
    if (e.target === document.querySelector(".product-detail__decrease")) {
      if (qty <= 0) return;
      setQty((qty) => --qty);
    } else if (document.querySelector(".product-detail__increase")) {
      if (qty >= 10) return;
      setQty((qty) => ++qty);
    }
  };

  const  handleAddProductToCart = () => {
        // dispatch(addProductToCart(id,qty));
       
        var form = document.forms['add-product-to-cart'];
        var inputId = form.querySelector('input[name="id"]');
        var qtyId = form.querySelector('input[name="qty"]');
        inputId.value = id;
        qtyId.value = qty;
        form.action ='/api/cart';
        form.submit();
  }

 
  return (
    <>
      <ProductSort />
      <div className="product-detail">
        {loading ? (
          "Loading..."
        ) : (
          <>
            <div className="product-detail__list-images">
            <div className="product-detail__image">
              <img src={product.image} alt={product.name} />
            </div>
            </div>
            <div className="product-detail__description">
              <div className="product-detail__star">
                {[...Array(product.star).keys()].map((x, index) => (
                  <span key={index}>
                    <AiOutlineStar />
                  </span>
                ))}
              </div>
              <p className="product-detail__name">{product.name}</p>
              <p className="product-detail__price">{product.price} đ</p>
              <div className="product-detail__size">
                <span>{product.size}</span>
              </div>
              <div className="product-detail__qty">
                <div className="product-detail__wrapper" onClick={handleQty}>
                  <button className="product-detail__decrease">-</button>
                  <span className="product-detail__amount">{qty}</span>
                  <button className="product-detail__increase">+</button>
                </div>
              </div>
              <div className="product-detail__pro-detail">
                <button className="product-detail-btn product-detail__add" onClick={handleAddProductToCart}>
                  <FaCartPlus className="product-detail__cart" />
                  Thêm giỏ hàng
                </button>
                <button className="product-detail-btn product-detail__buy-now">
                  Mua ngay
                  <BsArrowBarRight className="product-detail__next" />
                </button>
              </div>
              <div>
                <span className="product-detail__span">Hoặc đặt mua: </span>
                <a
                  href="tel:+0909300746"
                  className="product-detail__span product-detail__span--red"
                >
                  0909300746
                </a>
                <span className="product-detail__span">
                  {" "}
                  ( Tư vấn Miễn phí )
                </span>
              </div>
              <div className="product-detail__icons">
                <a
                  href="https://twitter.com/?lang=vi"
                  className="product-detail__icon product-detail__icon--twitter"
                >
                  {" "}
                  <FaTwitter />{" "}
                </a>
                <a
                  href="https://www.facebook.com/Viettaicomssss"
                  className="product-detail__icon product-detail__icon--facebook"
                >
                  {" "}
                  <FaFacebook />{" "}
                </a>
                <a
                  href="https://www.pinterest.com/"
                  className="product-detail__icon product-detail__icon--pinterest"
                >
                  {" "}
                  <FaPinterest />{" "}
                </a>
                <a
                  href="https://www.facebook.com/messages/t/5026602670779815/"
                  className="product-detail__icon product-detail__icon--message"
                >
                  {" "}
                  <FaFacebookMessenger />{" "}
                </a>
                <a
                  href="https://chat.zalo.me/"
                  className="product-detail__icon product-detail__icon--zalo"
                >
                  {" "}
                  <SiZalo />{" "}
                </a>
                <a className="product-detail__icon product-detail__icon--reply">
                  {" "}
                  <FaReplyAll />{" "}
                </a>
                <QrCode />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="product__detail__description">
        <p className="product__detail__description-heading">
          <AiFillThunderbolt className="product__detail__description-heading__thunder" />{" "}
          <span className="product__detail__description-heading__span">
            KINGSHOES.VN <GiCheckMark />
          </span>
          <span>
            Ngày đổi hàng <GiCheckMark />
          </span>
          <span>
            Giao hàng miễn phí <GiCheckMark />
          </span>
          <span>
            Thanh toán khi nhận hàng <GiCheckMark />
          </span>
          <span>Bao hành hàng chính hãng trọn đời !! </span>
        </p>
        <p className="product__detail__description-heading-2">
          <TfiHandPointRight className="product__detail__description-heading-2__point" />
          <TfiHandPointRight className="product__detail__description-heading-2__point" />
          <TfiHandPointRight className="product__detail__description-heading-2__point" />
          <span> KINGSHOES.VN "You're King In Your Way".!!! </span>
          <GiRunningShoe className="product__detail__description-heading-2__shoe" />
          <GiRunningShoe className="product__detail__description-heading-2__shoe" />
          <GiRunningShoe className="product__detail__description-heading-2__shoe" />
        </p>
        <p className="product__detail__description-heading-2">
          <span> KING'S & QUEEN'S Check in Tại KINGSHOES.VN</span>
        </p>
        <p className="product__detail__description-heading-2">
          <span>
            {" "}
            192/2 Nguyễn Thái Bình, phường 12, quận Tân Bình, thành phố Hồ Chí
            Minh
          </span>
        </p>
        <p className="product__detail__description-heading-2">
          <span>
            Đến với "KINGSHOES.VN” quý khách hàng sẽ có những sản phẩm ưng ý
            nhất, chất lượng phục vụ tốt và giá thành tốt nhất, cùng những “
            Chương Trình Khuyến Mãi Đặc Biệt”.{" "}
          </span>
        </p>
        <div className="product__detail__description-video">
          <iframe src="https://www.youtube.com/embed/EXx9dP_0Bpo"></iframe>
        </div>
      </div>
        
      <div className="product__detail-relate">
      <SliderProduct   relate products={products}/>
      </div>
      <form style={{opacity:"0"}} name="add-product-to-cart" method='POST' >
            <input readOnly={true} type="text" name="id" value="" />
            <input readOnly={true} type="text" name="qty" value="" />
          </form>
      <Zalo/>
    </>
  );
}

export default ProductDetail;
