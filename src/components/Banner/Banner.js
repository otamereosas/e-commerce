import React from "react";
import women from "../../assets/women clothes.webp";
import men from "../../assets/men clothes.webp";
import { BannerWrapper, ImageWrapper } from "./BannerStyles";
import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <>
         <BannerWrapper>
            <ImageWrapper>
               <img src={men} alt="women clothes" />
               <button>
                  <Link to="/search/mens">men's Shop</Link>
               </button>
               <p>
                  Eiusmod cillum Lorem quis enim eiusmod qui mollit. Duis sint
                  deserunt minim tempor et nisi proident magna sunt sit Lorem.
                  Duis elit laboris id elit.
               </p>
            </ImageWrapper>
            <ImageWrapper>
               <img src={women} alt="women clothes" />
               <button>
                  <Link to="/search/womens">Women's Shop</Link>
               </button>
               <p>
                  Ipsum cupidatat minim incididunt irure ut fugiat nisi ex
                  laboris. Nostrud culpat deserunt tempor id officia. In eu
                  laborum excepteur eiusmod amet laborist.
               </p>
            </ImageWrapper>
         </BannerWrapper>
      </>
   );
};

export default Banner;
