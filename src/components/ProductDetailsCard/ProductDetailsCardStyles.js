import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   padding: 2rem;
   width: 90%;
   margin: auto;
   padding-top: 80px;
   text-transform: capitalize;

   img {
      width: 320px;
      height: 350px;
      object-fit: cover;
      border-radius: 5px;
   }
   
   h1 {
      font-weight: 500;
      padding: 0.5rem 0;
   }
   h3,
   h4 {
      margin: 0.5rem 0;
   }
   
   @media screen and (max-width: 799px){
      display: block;
      width: 100%;
      padding: 5rem 0.7rem;

      img {
      width: 200px;
      height: 250px;
      object-fit: cover;
      border-radius: 5px;
   }
   
   h1 {
      font-weight: 500;
      padding: 0.5rem 0;
   }
   h3,
   h4 {
      margin: 0.5rem 0;
   }
  }
`;

export const Desc = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 6rem;
   justify-content: center;

   p {
      line-height: 1.5;
      width: 80%;
      padding-bottom: 0.8rem 0rem;
   }

   ul li{
      margin-left: 20px;
   }
   @media screen and (max-width: 799px){

      padding: 0.1rem;
     p{
        width: 100%;
        padding: 0.3rem;
        line-height: 1.3;
     } 
   }
   
`;

