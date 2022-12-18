import React, { useEffect, useState } from "react";
import ListProduct from "../../components/ListProduct";
import axios from "axios";
import {  useSelector } from "react-redux";

function ProductNavigation({ size, price, orderBy ,nike }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const getProductAll = useSelector(state => state.getProducts);
  const {products : list} = getProductAll;
  
  const handleSortProduct = () => {
    var newProduct = list;
        var sizeZ  = parseInt(size) || null;
        var priceZ  = {
          start :0,
          end:1,
          none :null,
        }
        switch(price) {
          case "Dưới 3 Triệu":
            priceZ.start = 0;
            priceZ.end = "3.000.000";
          break;

          case "Từ 3 đến 5 Triệu": 
          priceZ.start = "3.000.000";
          priceZ.end = '5.000.000';
          break;
          case "Từ 5 đến 10 Triệu":
            priceZ.start = '5.000.000';
            priceZ.end = '10.000.000';
          break;
          case "Từ 10 đến 15 Triệu": 
          priceZ.start = '10.000.000';
          priceZ.end = '15.000.000';
          break;
          case "Từ 15 đến 20 Triệu":
            priceZ.start = '15.000.000';
            priceZ.end = '20.000.000';  
          break;
          case "Từ 20 đến 25 Triệu": 
          priceZ.start = '20.000.000';
            priceZ.end = '25.000.000';  
          break;
          case "Từ 25 đến 35 Triệu":
            priceZ.start = '25.000.000';
            priceZ.end = '35.000.000';    
          break;
          case "Từ 35 đến 60 Triệu":
            priceZ.start = '35.000.000';
            priceZ.end = '60.000.000';   
          break;
          default : 
          priceZ.none = 'Tất cả';
        }
        var orderByZ  = orderBy;
       
        if(sizeZ  && priceZ  && orderByZ) {
            
          var newSortSize = newProduct.filter(item => item.size === sizeZ);
          var newSortPrize= [];
          newSortSize.forEach((item) => {
              if(parseFloat(item.price) >= parseFloat(priceZ.start) &&parseFloat(item.price) < parseFloat(priceZ.end)){
                newSortPrize.push(item);
              }
          });
          var newSortOrderBy = [];
            if(orderByZ === "Giá từ thấp đến cao" || orderByZ ==="Từ A -> Z" ){
            
              newSortOrderBy = newSortPrize.sort((a,b) => {
                if(parseFloat(a.price) < parseFloat(b.price) ) {
                  return -1;
                }else if(parseFloat(a.price) > parseFloat(b.price)){
                    return 1;
                }
                return 0;
              });
            }else if(orderByZ === "Từ Z -> A") {
              newSortOrderBy = newSortPrize.reverse(item => parseFloat(item.price));
            }
            setProducts(newSortOrderBy);
        }else if(sizeZ  && priceZ.none !== "Tất cả") {
          var newSortSize = newProduct.filter(item => item.size === sizeZ);
          var newSortPrize= [];
          newSortSize.forEach((item) => {
              if(parseFloat(item.price) >= parseFloat(priceZ.start) &&parseFloat(item.price) < parseFloat(priceZ.end)){
                newSortPrize.push(item);
              }
          });
           newSortOrderBy = [];
              newSortOrderBy = newSortPrize.sort(item => parseFloat(item.price));
            setProducts(newSortOrderBy);
        }else if(sizeZ) {
          var newSortSize = newProduct.filter(item => item.size === sizeZ);
               setProducts(newSortSize);
        }
  };
  // useCallback(() => {
  //     handleSortProduct();
  // }, [size, price, orderBy]);
  useEffect(()=> {
    handleSortProduct();
  },[size,price,orderBy])
  useEffect(() => {
    const getProductNavigation = async () => {
      try {
        const { data } = await axios.get("/api/product", {
          params: {
            page: page,
          },
        });
        setProducts(data.results);
        setTotalPage(data.total_pages);
      } catch (err) {
        console.log("ERROR", err);
      }
    };
   
      getProductNavigation();
    
  }, [page]);
  const handlePage = (e) => {
    const btns = document.querySelectorAll(".main-product__btn-more button");
    let element = e.target;
    if (btns) {
      btns.forEach((x) => {
        Object.assign(x.style, {
          background: "initial",
          color: "initial",
        });
      });
    }
    if (element === document.querySelector(".main-product__btn-more")) {
      Object.assign(btns[page].style, {
        background: "red",
        color: "white",
      });
      return;
    }
    let newPage;
    if (element) {
      switch (element.title) {
        case "prev":
          newPage = parseInt(page - 1);
          element = btns[page - 1];
          console.log(newPage);
          break;
        case "1":
          newPage = parseInt(element.title);
          break;
        case "2":
          newPage = parseInt(element.title);
          break;
        case "3":
          newPage = parseInt(element.title);
          break;
        case "4":
          newPage = parseInt(element.title);
          break;
        case "5":
          newPage = parseInt(element.title);
          break;
        case "6":
          newPage = parseInt(element.title);
          break;
        case "7":
          newPage = parseInt(element.title);
          break;
        case "8":
          newPage = parseInt(element.title);
          break;
        case "next":
          newPage = parseInt(page + 1);
          if (page === 1) {
            element = btns[page];
          } else {
            element = btns[page + 1];
          }
          console.log(newPage);
          break;
        default:
          break;
      }
      setPage(newPage);
      Object.assign(element.style, {
        background: "red",
        color: "white",
      });
    }
  };
  return (
    <>
    {products.length <= 0 ? "Không có sản phẩm nào": (
      <>
     
     
      <ListProduct  discount mainProduct news homeProducts products={products.filter(item => nike ? item.trademark ==="NIKE":item)}/>
     
     {!nike && (   <div className="main-product__btn-more" onClick={handlePage}>
        {!(page === 1) && <button title="prev">Prev</button>}
        {[...Array(totalPage).keys()].map((x) => (
          <button key={x + 1} title={x + 1}>
            {x + 1}
          </button>
        ))}
        {page < totalPage && <button title="next">Next</button>}
      </div>)}
   
      </>
    ) }
      
    </>
  );
}

export default ProductNavigation;
