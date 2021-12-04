import styled from "styled-components";

export const BannerWrapper = styled.div`
`;

export const Top = styled.div`
   height: 220px;
   overflow: hidden;
   width: 95%;
   margin: -20px auto 25px;
   border-radius: 5px;
`;

export const ImageWrapper = styled.div`
   img {
      object-fit: cover;
      width: 100%;
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
   margin: auto;

   h2{
      font-weight: 400;
      font-size:clamp(10px, 5vw, 22px);
      padding: 0.5rem 0;
   }
`;

export const CategoryWrapper = styled.div`
   width: 94%;
   height: 160px;
   /* margin: 5px; */
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   background: white;
   border-radius: 10px;

   img {
      border-radius: 10px;
      width: 100%;
      object-fit: cover;
      height: 160px;
   }
`;
