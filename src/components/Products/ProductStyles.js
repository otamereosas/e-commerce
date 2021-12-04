import styled from "styled-components";
export const Main = styled.div`
   width: 95%;
   margin: auto;
   padding: 50px;
   text-align: center;

   .slider {
      margin: -35px auto -20px;
   }

   .categories {
      border-radius: 100rem;
      font-family: "Avenir Next";
      font-size: 13px;
      font-weight: 400;
      padding: 5px 1.5rem;
      width: 95%;
      color: black;
      box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
      border: solid 1.999px transparent;
      background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
         ),
         linear-gradient(101deg, #ffb800, #ff7a00);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #fff inset;
   }

   .categories:hover {
      box-shadow: none;
      color: white;
   }

   h1 {
      margin: 2rem;
      font-weight: 500;
      font-size: clamp(10px, 5vw, 25px);
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
   padding: 0 1.3rem;

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
      border-radius: 5px;
      font-family: "Avenir Next";
      font-size: 13px;
      padding: 5px 1rem;
      width: 110px;
      color: black;
      box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
      border: solid 1.999px transparent;
      background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
         ),
         linear-gradient(101deg, #ffb800, #ff7a00);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #fff inset;
   }
   button:hover {
      box-shadow: none;
      color: white;
   }

   h3 {
      font-weight: 500;
      text-transform: capitalize;
   }
   p {
      font-weight: bolder;
      margin: 5px;
   }

   @media screen and (max-width: 799px) {
      width: 49%;
      display: flex;
      flex-direction: column;
      margin-bottom: 7px;
      /* height: 190px; */

      img {
         height: 220px;
         /* width: 150px; */
         object-fit: cover;
      }
      button {
         border-radius: 5px;
         font-family: "Avenir Next";
         font-size: 13px;
         padding: 5px 1rem;
         width: 110px;
         color: black;
         box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
         border: solid 1.999px transparent;
         background-image: linear-gradient(
               rgba(255, 255, 255, 0),
               rgba(255, 255, 255, 0)
            ),
            linear-gradient(101deg, #ffb800, #ff7a00);
         background-origin: border-box;
         background-clip: content-box, border-box;
         box-shadow: 2px 1000px 1px #fff inset;
      }
      button:hover {
         box-shadow: none;
         color: white;
      }
      .content {
         display: flex;
         flex-direction: column;
         justify-content: center;
         text-align: start;
         padding: 5px 10px 0;
         font-size: 13px;
      }
   }
`;
