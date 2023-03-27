import Product from "../../Components/product/product";
import "./shop.css"
import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../productredux/productaction";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

function Shop()
{

    const dispatch = useDispatch();
    const products = useSelector((state) => state.productGetReducer.products);
  
    console.log("ena el products" + products);
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch ]);
    console.log("ena el products" + Array.isArray(products) );

   
   const handleRefresh = () => {
     setTimeout(() => {
       dispatch(getProducts());
     }, 1000); 
     console.log("after 1 second");// Refresh after 1 seconds (adjust the number as needed)
   };

    return (
        <> 
         {/* <Carousel style={{marginTop:"100px",maxLength:"300px"}} pause='hover' className='bg-light'>
         {Array.isArray(products) && products.map((p) => (
        <Carousel.Item key={p._id}>
          <Link to={`/productDetail/${p._id}`}>
            <Image src={`${process.env.PUBLIC_URL}/images/${p.imageProduct}`} alt={p.productName} fluid />
          </Link>
        </Carousel.Item>  
      ))}
    </Carousel> */}
        <div className="shopcontainer">
        {Array.isArray(products) && products.map((p) => (
          <Product product={p} >

          </Product>
        ))}

        </div>
        </>
    )
}
export default Shop;