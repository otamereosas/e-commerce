import styled from "styled-components";

export const CheckoutWrapper = styled.div`
   width: 70%;
   margin: -25px auto;
   /* padding-top: 80px; */

   @media screen and (max-width: 799px) {
      width: 99%;
   }

   h1 {
      font-weight: 500;
      text-align: center;
      margin-bottom: 0.1;
      font-size: clamp(10px, 5vw, 25px);
   }

   img {
      width: 80px;
      border-radius: 5px;
   }
   p {
      font-size: 13px;
   }

   th {
      padding: 1rem;
      font-size: 15px;
      color: gray;
   }
   td {
      transform: translateX(1rem);
   }
   .quantity {
      transform: translateX(0);
      text-align: center;
   }
   #btn,
   #btn2 {
      cursor: pointer;
      color: black;
      padding: 0.5rem;
   }
`;

export const CartWrapper = styled.div``;

export const Bottom = styled.div`
   display: flex;
   width: 99%;
   padding: 1rem 1.5rem;
   justify-content: space-between;
   border: solid 1.9px grey;
   margin: 1rem 0 3rem;
   color: gray;
   font-size: 14px;
`;
