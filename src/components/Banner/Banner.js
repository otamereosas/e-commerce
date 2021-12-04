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
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
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
            <input type="search" placeholder="What are you looking for" />
         </BannerWrapper>
         <Wrapper>
            <Slider {...settings}>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Fruits">
                        <img src={banner1} alt="" />
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Vegetable">Vegetable</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Canned Goods">Canned Goods</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Frozen Foods">Frozen Foods</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Meat">Meat</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Fish ands shellfish">
                        Fish ands shellfish
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
                        Condiments and Spices
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Sauces and Oil">Sauces and Oil</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Snacks">Snacks</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Bread and Bakery">Bread and Bakery</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Pasta and Rice">Pasta and Rice</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Cereal">Cereal</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Baking">Baking</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Personal Care">Personal Care</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Tubers">Tubers</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Health Care">Health Care</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Paper and Wraps">Paper and Wraps</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Household Supplies">
                        Household Supplies
                     </Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Baby Items">Baby Items</Link>
                  </CategoryWrapper>
               </div>
               <div>
                  <CategoryWrapper>
                     <Link to="/search/Other Items">Other Items</Link>
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
