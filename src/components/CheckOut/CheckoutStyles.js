import styled from "styled-components";

export const CheckoutWrapper = styled.div`
   width: 70%;
   margin: auto;
   padding-top: 80px;

   h1 {
      font-weight: 500;
      text-align: center;
      margin-bottom: 1rem;
   }

   img {
      width: 100px;
      border-radius: 5px;
   }

   th {
      padding: 2rem;
      font-size: 17px;
   }
   td {
      transform: translateX(4rem);
    }
    .quantity {
     transform: translateX(0);
      text-align: center;
   }
   #btn, #btn2{
      cursor: pointer;
      color: black;
      padding: 0.5rem;
   }
`;

export const CartWrapper = styled.div``;

export const Bottom = styled.div`
display: flex;
justify-content: space-between;

`;
