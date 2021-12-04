import styled from "styled-components";

export const BannerWrapper = styled.div`
   input {
      width: 50%;
      min-width: 300px;
      max-width: 500px;
      padding: 12px;
      border-radius: 6px;
      transform: translateY(-70%);
   }
`;

export const Top = styled.div`
   height: 200px;
   overflow: hidden;
`;

export const ImageWrapper = styled.div`
   width: 100%;

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
   
   img{
      border-radius: 10px;
      width: 100%;
      object-fit: cover;
      height: 160px;
   }
`;
