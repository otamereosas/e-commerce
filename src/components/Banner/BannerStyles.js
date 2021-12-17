import styled from "styled-components";

export const BannerWrapper = styled.div``;

export const Top = styled.div`
   height: 200px;
   overflow: hidden;
   width: 95%;
   margin: -25px auto 25px;
   border-radius: 5px;

   @media screen and (max-width: 799px) {
      height: 150px;
   }
`;

export const ImageWrapper = styled.div`
   text-align: center;
   img {
      object-fit: cover;
      width: 100%;
      height: 100%;
   }

   button {
      z-index: 5;
      width: 200px;
      margin-left: 3rem;
      font-weight: 500;
      line-height: 1.5;
   }
`;

export const Wrapper = styled.div`
   width: 95%;
   margin: -20px auto 0;

   h2 {
      font-weight: 400;
      font-size: clamp(10px, 5vw, 18px);
      padding: 0.5rem 0;
      color: rgb(10 132 103)
   }

   p {
      text-align: center;
      padding-top: 5px;
      font-size: 13.3px;
   }
`;

export const CategoryWrapper = styled.div`
   width: 94%;
   height: 160px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   border-radius: 10px;

   img {
      border-radius: 10px;
      width: 100%;
      object-fit: cover;
      height: 160px;
   }
`;
