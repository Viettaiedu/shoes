

import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import routesConfig from '../../config/routes'

function ProductRight({products,handleToProductDetail}) {
  return (
    <>
        <div className="main-product__right">
            <img
              className="main-product__right__img"
              src="https://kingshoes.vn/data/upload/files/bannersitebar01.jpg"
              alt=""
            />
            <div className="main-product__right__content">
              <h3 className="main-product__right__heading">Tin tức mới</h3>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/kingshoes.vn-huong-dan-cach-ve-sinh-giay-sneakers-chinh-hang-tai-tphcm.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>
                    Dịch Vụ Vệ Sinh Giày Sneaker Chuyên Nghiệp Tại Tân Bình -
                    Kingshoesvn
                  </p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/cach-do-size-giay-chuan-tai-viet-nam-US-UK-Chuan-xac-tai-KINGSHOES-VN-tphcm-tanbinh.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>Chọn Size Giày Nike, Adidas</p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/cach-do-size-giay-chuan-tai-viet-nam-US-UK-Chuan-xac-tai-KINGSHOES-VN-tphcm-tanbinh-1533788373-.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>
                    Cách Đo Cỡ Chân Và Xác Định Size Giày Việt Nam, US, UK Chuẩn
                    Xác Tại KING SHOES
                  </p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/cach-do-size-giay-chuan-tai-viet-nam-US-UK-Chuan-xac-tai-KINGSHOES-VN-tphcm-tanbinh-1533788373-.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>
                    Cách Đo Cỡ Chân Và Xác Định Size Giày Việt Nam, US, UK Chuẩn
                    Xác Tại KING SHOES
                  </p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/kingshoes.vn-huong-dan-cach-ve-sinh-giay-sneakers-chinh-hang-tai-tphcm.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>
                    Dịch Vụ Vệ Sinh Giày Sneaker Chuyên Nghiệp Tại Tân Bình -
                    Kingshoesvn
                  </p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/cach-do-size-giay-chuan-tai-viet-nam-US-UK-Chuan-xac-tai-KINGSHOES-VN-tphcm-tanbinh.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>Chọn Size Giày Nike, Adidas</p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/cach-do-size-giay-chuan-tai-viet-nam-US-UK-Chuan-xac-tai-KINGSHOES-VN-tphcm-tanbinh-1533788373-.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>
                    Cách Đo Cỡ Chân Và Xác Định Size Giày Việt Nam, US, UK Chuẩn
                    Xác Tại KING SHOES
                  </p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
              <div className="main-product__right-block">
                <img
                  src="https://kingshoes.vn/data/upload/media/cach-do-size-giay-chuan-tai-viet-nam-US-UK-Chuan-xac-tai-KINGSHOES-VN-tphcm-tanbinh-1533788373-.jpg"
                  alt=""
                />
                <div className="main-product__right__description">
                  <p>
                    Cách Đo Cỡ Chân Và Xác Định Size Giày Việt Nam, US, UK Chuẩn
                    Xác Tại KING SHOES
                  </p>
                  <p>13/08/2020 - 8:00AM</p>
                </div>
              </div>
            </div>
            <h3 className="main-product__right__heading">Sản phẩm mới</h3>
            <div className="main-product__right__content main-product__right__content--product">
              {products.map((product, index) => (
                <div
                  onClick={() => handleToProductDetail(product.id)}
                  key={index}
                  className="main-product__right-block main-product__right-block--product "
                >
                  <img src={product.image} alt={product.name} />
                  <div className="main-product__right__description">
                    <p>{product.name}</p>
                    <p>
                      {" "}
                      {[...Array(product.star).keys()].map((x, index) => (
                        <span key={index}>
                          {" "}
                          <AiFillStar className="main-product__right__description__star" />
                        </span>
                      ))}
                    </p>
                    <p>{product.price} đ</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="main-product__right__heading">Danh mục</h3>
            <div className="main-product__right-block main-product__right-block--list">
              <Link
                className="main-product__right__link"
                to={routesConfig.dayGiay}
              >
                Dây giày
              </Link>
              <Link
                className="main-product__right__link"
                to={routesConfig.otherBrands}
              >
                Other Brands
              </Link>
              <Link
                className="main-product__right__link"
                to={routesConfig.jordan}
              >
                Jordan
              </Link>
              <Link
                className="main-product__right__link"
                to={routesConfig.yeezy}
              >
                Yeeze
              </Link>
              <Link
                className="main-product__right__link"
                to={routesConfig.nike}
              >
                Nike
              </Link>
              <Link
                className="main-product__right__link"
                to={routesConfig.adidas}
              >
                Adidas
              </Link>
            </div>
          </div>
    </>
  )
}

export default ProductRight