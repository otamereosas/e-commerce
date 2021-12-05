import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   padding: 0 1rem;
   width: 90%;
   margin: -25px auto;
   text-transform: capitalize;

   img {
      width: 320px;
      height: 350px;
      object-fit: cover;
      border-radius: 5px;
   }

   h1 {
      font-weight: 500;
      padding: 0rem 0;
      font-size: clamp(10px, 5vw, 20px);
   }
   h3,
   h4 {
      margin: 0.2rem 0;
      font-weight: 400;
      font-size: clamp(10px, 5vw, 16px);
   }

   @media screen and (max-width: 799px) {
      img {
         width: 200px;
         height: 250px;
         object-fit: cover;
         border-radius: 5px;
      }
   }

   @media screen and (max-width: 609px) {
      display: block;
      width: 100%;

      h1 {
         font-weight: 500;
         padding: 0.5rem 0;
      }
      h3,
      h4 {
         margin: 0.3rem 0;
      }
   }
`;

export const Desc = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 5rem;
   justify-content: center;

   p {
      line-height: 1.5;
      width: 80%;
      /* padding: 0rem; */
   }

   ul li {
      margin-left: 20px;
   }

   @media screen and (max-width: 1025px) {

      padding: 0 2rem;

      p {
         width: 100%;
      }
   }

   @media screen and (max-width: 609px) {
      padding: 0.1rem 0;
      
      p {
         width: 100%;
         padding: 0.3rem 0;
         line-height: 1.3;
      }
   }
`;
