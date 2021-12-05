import styled from "styled-components";
export const Main = styled.div`
   width: 95%;
   margin: -20px auto;
   padding: 50px;
   text-align: center;

   .slider {
      margin: -35px auto -20px;
   }

   .categories {
      border-radius: 100rem;
      font-size: 13px;
      width: 95%;
   }

   h1 {
      margin: 1rem 0 0.1rem;
      font-weight: 500;
      font-size: clamp(10px, 5vw, 18px);
   }

   select {
      border-radius: 10px;
      border: solid 1.9px yellow;
      padding: 10px;
   }

   @media screen and (max-width: 799px) {
      width: 100%;
      padding: 0.5rem;
   }
`;
export const ProductWrapper = styled.div`
   margin: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   padding: 0 0.2rem;

   @media screen and (max-width: 799px) {
      /* display: block; */
   }
`;
export const ProductCard = styled.div`
   width: 18%;
   margin-bottom: 2rem;
   box-shadow: 0px 0.2px 2px gray;
   padding-bottom: 1rem;
   border-radius: 5px;
   overflow: hidden;

   img {
      width: 100%;
      height: 250px;
      object-fit: cover;
   }
   button {
      width: 110px;
   }

   h3 {
      font-weight: 500;
      text-transform: capitalize;
   }
   p {
      font-weight: bolder;
      margin: 5px;
   }

   @media screen and (max-width: 1025px) {
      width: 23.5%;
      display: flex;
      flex-direction: column;
      margin-bottom: 7px;
      /* height: 190px; */

      img {
         height: 190px;
         width: 94%;
         object-fit: cover;
         text-align: center;
      }
      button {
         width: 110px;
      }

      .content {
         display: flex;
         flex-direction: column;
         justify-content: center;
         text-align: start;
         padding: 5px 10px 0;
         font-size: 13px;
         h3 {
            margin-left: 3px;
         }
      }
   }
   @media screen and (max-width: 909px) {
      width: 24.5%;
   }

   @media screen and (max-width: 600px) {
      width: 32.7%;
   }
   @media screen and (max-width: 530px) {
      width: 48.7%;
   }
`;
