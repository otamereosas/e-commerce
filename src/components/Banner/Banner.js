import React from "react";
import {
   BannerWrapper,
   Top,
   ImageWrapper,
   CategoryWrapper,
   Wrapper,
} from "./BannerStyles";
import { Link } from "react-router-dom";
import { categogyList } from "../data/categories";
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
               {categogyList.map((items, index) => {
                  return (
                     <div>
                        <CategoryWrapper>
                           <Link to={items.link}>
                              <img src={items.image} alt="" />
                           </Link>
                        </CategoryWrapper>
                        <p>{items.name}</p>
                     </div>
                  );
               })}
            </Slider>
            <div>
               <h2>Our combo packages</h2>
            </div>
         </Wrapper>
      </>
   );
};

export default Banner;
