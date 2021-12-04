import React from "react";
import {
   BannerWrapper,
   Top,
   ImageWrapper,
   CategoryWrapper,
   Wrapper,
} from "./BannerStyles";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import fruits from "../../assets/fruits.jpg";
import veg from "../../assets/veg.jpg";
import canned from "../../assets/canned.jpg";
import frozen from "../../assets/frozen.jpg";
import meat from "../../assets/meat.jpg";
import fishes from "../../assets/fishes.jpg";
import spices from "../../assets/spices.jpg";
import oil from "../../assets/oil.jpg";
import snacks from "../../assets/snacks.jpg";
// import bread from "../../assets/bread.jpg";
import rice from "../../assets/rice.jpg";
import cereal from "../../assets/cereal.jpg";
import bakings from "../../assets/bakings.jpg";
import personal from "../../assets/personal.jpg";
// import tubers from "../../assets/tubers.jpg";
import health from "../../assets/health.jpg";
import tissues from "../../assets/tissues.jpg";
// import Household from "../../assets/Household.jpg";
// import babies from "../../assets/babies.jpg";
import others from "../../assets/others.jpg";

const Banner = () => {
   const settingsOne = {
      arrows: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 9000,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   const settings = {
      // arrows: false,
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 2,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 2,
               initialSlide: 0,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 2,
            },
         },
      ],
   };
   return (
      <>
         <BannerWrapper>
            <Top>
               <Slider {...settingsOne}>
                  <ImageWrapper>
                     <img src={banner1} alt="banner" />
                  </ImageWrapper>
                  <ImageWrapper>
                     <img src={banner2} alt="banner" />
                  </ImageWrapper>
                  <ImageWrapper>
                     <img src={banner3} alt="banner" />
                  </ImageWrapper>
                  <ImageWrapper>
                     <img src={banner4} alt="banner" />
                  </ImageWrapper>
               </Slider>
            </Top>
         </BannerWrapper>
         <Wrapper>
            <h2>Categories</h2>
            <Slider {...settings}>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Fruits">
                        <img src={fruits} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Vegetable">
                        <img src={veg} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Canned Goods">
                        <img src={canned} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Frozen Foods">
                        <img src={frozen} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Meat">
                        <img src={meat} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Fish ands shellfish">
                        <img src={fishes} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Deli">Deli</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Condiments and Spices">
                        <img src={spices} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Sauces and Oil">
                        <img src={oil} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Snacks">
                        <img src={snacks} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Bread and Bakery">
                        <img src={veg} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Pasta and Rice">
                        <img src={rice} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Cereal">
                        <img src={cereal} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Baking">
                        <img src={bakings} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Personal Care">
                        <img src={personal} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Tubers">
                        <img src={veg} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Health Care">
                        <img src={health} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Paper and Wraps">
                        <img src={tissues} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Household Supplies">
                        <img src={veg} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Baby Items">
                        <img src={veg} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Other Items">
                        <img src={others} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
            </Slider>
            <div>
               <h2>Our combo packages</h2>
            </div>
         </Wrapper>
      </>
   );
};

export default Banner;
