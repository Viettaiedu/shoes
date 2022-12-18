

import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';





import Zalo from '../../components/Zalo'
import ProductSort from '../../components/ProductSort'
import ProductPage from '../../components/ProductPage';
import ProductNavigation from '../../components/ProductNavigation';
import ProductRight from '../../components/ProductRight';
import {getProducts} from '../../redux/actions/productAction';
function AirJordan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [size ,setSize] = useState("");
  const [price ,setPrice] = useState("");
  const [orderBy ,setOrderBy] = useState("");
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
const handleToProductDetail = (id) => {
  navigate(`/product/${id}`);
};
const listPr = useSelector((state) => state.getProducts);
  const { products } = listPr;
  
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
      <div>
    <ProductSort handleSortProduct={handleSortProduct} />
         <ProductPage airJordan />
        <div className="main-product">
          <div className="main-product__left">
            <ProductNavigation airJordan discount size={size} price={price} orderBy={orderBy} />
          </div>
            <ProductRight handleToProductDetail={handleToProductDetail} products={products.filter(item => item.trademark ==="JORDAN")}/>
        </div>
    </div>
    <Zalo />
    </>
  )
}

export default AirJordan