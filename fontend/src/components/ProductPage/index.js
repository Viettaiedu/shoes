

import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import routesConfig from '../../config/routes'

function ProductPage({nike,adidas,nikeNam,nikeNu,adidasNam,adidasNu,jordan , airJordan,yeezy,otherBrands}) {
  return (
    <>
         <div className="product-page">
          <Link to={routesConfig.home}>Trang chủ</Link>
            <AiOutlineDoubleRight/>
          <span>
            <Link to={routesConfig.product}>Sản phẩm</Link>
          </span>
          {nike && <span> <AiOutlineDoubleRight/> Nike</span>} 
          {nikeNam  && <p> <AiOutlineDoubleRight/> <Link to={routesConfig.nike}>Nike</Link> <span><AiOutlineDoubleRight/> Nam</span> </p> }
          {nikeNu  && <p> <AiOutlineDoubleRight/> <Link to={routesConfig.nike}>Nike</Link> <span><AiOutlineDoubleRight/> Nữ</span> </p> }
        
          {adidas && <span> <AiOutlineDoubleRight/> Adidas</span>} 
          {adidasNam  && <p> <AiOutlineDoubleRight/> <Link to={routesConfig.adidas}>Adidas</Link> <span><AiOutlineDoubleRight/> Nam</span> </p> }
          {adidasNu  && <p> <AiOutlineDoubleRight/> <Link to={routesConfig.adidas}>Adidas</Link> <span><AiOutlineDoubleRight/> Nữ</span> </p> }
         
          {jordan && <span> <AiOutlineDoubleRight/> Jordan</span>} 
          {airJordan  && <p> <AiOutlineDoubleRight/> <Link to={routesConfig.jordan}>Jordan</Link> <span><AiOutlineDoubleRight/> Air jordan</span> </p> }
        
          {yeezy && <span> <AiOutlineDoubleRight/> Yeezy</span>} 
          {otherBrands && <span> <AiOutlineDoubleRight/> Other brands</span>} 
         </div>
    </>
  )
}

export default ProductPage