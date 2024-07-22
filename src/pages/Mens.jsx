import React, { useState, useEffect } from "react";
import "./css/Mens.css";
import Men_Products_Data from "../Men_Products_Data.jsx";

function Mens() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
 
  return (
    <div>
      <div className="page">MENS PRODUCTS</div>
      <div className="products  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 max-[500px]:w-[90%] ">
        {Men_Products_Data.map((product, index) => (
          <div key={index} className="product-card">
            <div className="products-images">
              <img
                className="products-image1"
                src={product.imageLink1}
                alt={product.productName}
              />
              <img
                className="products-image2"
                src={product.imageLink2}
                alt={product.productName}
              />
            
              <div className="add-to-cart">Add to Cart</div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    
    
    </div>
  );
}

export default Mens;
