import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "./SliderProduct.scss";
import Product from "../Product";
function SliderProduct({ products, discount, hot , delay , relate }) {
  return (
    <div className="slider-product">
      {discount && (
        <div className="home-products__title" data-mark="Discount">
          <h4>-Sản phẩm giảm giá</h4>
        </div>
      )}
      {hot && (
        <div className="home-products__title" data-mark="NỔI BẬT">
          <h4>-Sản phẩm hot</h4>
        </div>
      )}
      {relate && (
        <div className={`home-products__title ${relate ? "home-products__title-relate" : ""}`} data-mark="PRODUCTS">
          <h4>-Sản phẩm liên quan</h4>
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: delay || 600 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1001: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Product relate={relate} discount={discount} hot={hot} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderProduct;
