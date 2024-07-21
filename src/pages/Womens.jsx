import React, { useEffect }from "react";
import { Link } from "react-router-dom";
import Sliding_images from "../components/Sliding_images";
import Women_Products_Data from "../Women_Products_Data.jsx";
import heart_icon from "../icons/heart.svg";
import search_icon from "../icons/search.svg";
import {
    womens_sliding_image,
    womens_category_image,
} from "../components/import_images";

function Womens() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const womensfirstThreeImages = womens_category_image.slice(0, 3);
  const womensnextFourImages = womens_category_image.slice(3);

  return (
    <div>
      <div className="page">WOMENS PRODUCTS</div>
      <div className="products   grid-cols-1 md:grid-cols-2  lg:grid-cols-3 max-[500px]:w-[90%]">
        {Women_Products_Data.map((product, index) => (
          <div>
            <div className="products-images" key={index}>
              <img className="products-image1" src={product.imageLink1} alt={product.productName} />
              <img className="products-image2" src={product.imageLink2} alt={product.productName} />
          
              <div className="add-to-cart">Add to Cart</div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sliding_image">
        <Sliding_images images={womens_sliding_image} />
      </div>
      <div className="text">FEATURED PRODUCTS</div>
      <div className="products">
        <div className="three-column">
          {womensfirstThreeImages.map((image, index) => (
            <div className="image">
              <img key={index} src={image} alt="Category" />
            </div>
          ))}
        </div>
        <div className="four-column">
          {womensnextFourImages.map((image, index) => (
            <div className="image">
              <img key={index} src={image} alt="Category" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Womens;
