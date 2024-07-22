import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./css/Landing_page.css";
import Sliding_images from "../components/Sliding_images";
import Shop_button from "../components/Shop_button";
import {
  mens_sliding_image,
  mens_category_image,
  womens_sliding_image,
  womens_category_image,
} from "../components/import_images";

function Landing_page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mensfirstThreeImages = mens_category_image.slice(0, 3);
  const mensnextFourImages = mens_category_image.slice(3);

  const womensfirstThreeImages = womens_category_image.slice(0, 3);
  const womensnextFourImages = womens_category_image.slice(3);

  return (
    <div className="landing-main">
      <div>
        <Sliding_images images={mens_sliding_image} />
      </div>
      <div>
        <Shop_button category={"MEN"} link="/Mens" />
      </div>
      <div className="category-text">CATEGORIES</div>
      <div className="category-section">
        <div className="three-column  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mensfirstThreeImages.map((image, index) => (
            <div className="image">
              <Link to="/Mens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
        <div className="four-column grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mensnextFourImages.map((image, index) => (
            <div className="image">
              <Link to="/Mens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
      </div>
      <div className="women-section   ">
        <Sliding_images images={womens_sliding_image} />
      </div>
      <div>
        <Shop_button category={"WOMEN"} />
      </div>
      <div className="category-text">CATEGORIES</div>
      <div className="category-section">
        <div className="three-column  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {womensfirstThreeImages.map((image, index) => (
            <div className="image">
              <Link to="/Womens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
        <div className="four-column grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {womensnextFourImages.map((image, index) => (
            <div className="image">
              <Link to="/Womens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
