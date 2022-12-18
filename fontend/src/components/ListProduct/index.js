

import React from 'react';
import { memo } from 'react';


import './ListProduct.scss';
import Product from '../Product'
import PropTypes from 'prop-types';
function ListProduct({products , homeProducts , news ,mainProduct ,discount }) {
  const myClasss = [];
  if(homeProducts) {
    myClasss.push("list-products__new");
  }
  if(mainProduct) {
    myClasss.push("list-products__main")
  }
  return (
    <div className={myClasss.join(' ')}>
       {!mainProduct &&  products.filter((x) => x.state === "NEW").map((product,index) => (
              <Product discount mainProduct={mainProduct} news ={news} key={index} product={product} />
       ))}

       {mainProduct && products && products.map((product,index) => (
              <Product  mainProduct={mainProduct} news ={news} key={index} product={product} />
       ))}
    </div>
  )
}

ListProduct.propTypes = {
    products : PropTypes.array,
}
export default memo(ListProduct);