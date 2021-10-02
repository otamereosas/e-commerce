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
`;

export const Desc = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 6rem;
   justify-content: center;

   p {
      line-height: 1.5;
      width: 80%;
      padding-bottom: 0.6rem;
   }

   ul li{
      margin-left: 20px;
   }
`;

