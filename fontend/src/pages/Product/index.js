import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import ProductSort from "../../components/ProductSort";

import "./Product.scss";
import Zalo from "../../components/Zalo";
import ProductNavigation from "../../components/ProductNavigation";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import ProductPage from "../../components/ProductPage";
import ProductRight from "../../components/ProductRight";
function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [size ,setSize] = useState("");
  const [price ,setPrice] = useState("");
  const [orderBy ,setOrderBy] = useState("");
  const listPr = useSelector((state) => state.getProducts);
  const { products } = listPr;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const handleToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };
  
  const handleSortProduct = () => {
      var selection = document.querySelectorAll(".product-sort__selection");
      selection.forEach((select,index) => {
        if(index === 0 && selection[0].textContent !=="Chọn Size Giày" ){
            setSize(selection[0].textContent);
        }else if(index === 1 && selection[1].textContent !== "Tất cả"){
          setPrice(selection[1].textContent);
        }else if(index === 2 && selection[2].textContent !=="Giá thấp đến cao"){
          setOrderBy(selection[2].textContent)
        }
      })
  }
  return (
    <>  
      <>
        <ProductSort handleSortProduct={handleSortProduct} />
         <ProductPage />
        <div className="main-product">
          <div className="main-product__left">
            <ProductNavigation discount size={size} price={price} orderBy={orderBy} />
          </div>
            <ProductRight handleToProductDetail={handleToProductDetail} products={products}/>
        </div>
      </>
      <Zalo />
    </>
  );
}

export default Product;
