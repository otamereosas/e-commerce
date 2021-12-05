import styled from "styled-components";

export const NavWrapper = styled.div`
   width: 100%;

   input {
      width: 50%;
      min-width: 310px;
      max-width: 600px;
      padding: 12px 1rem;
      border-radius: 20px;
      transform: translateY(-70%);
      outline: none;
      border: none;
   }

   input::placeholder {
      font-weight: 400;
      font-size: 13px;
   }
`;

export const Nav = styled.div`
   width: 100%;
   background: linear-gradient(81.64deg, #ffb800 34.46%, #ff7a00 87.54%);
   z-index: 2;
   padding: 1.5rem 5rem 3rem;
   color: white;

   h1 {
      padding-top: 7px;
      font-weight: 500;
      font-size: clamp(10px, 5vw, 25px);
   }

   .home {
      text-align: center;
   }

   @media screen and (max-width: 799px) {
      padding: 1.5rem 1rem 3rem;
   }
`;

export const NavLinks = styled.div`
   text-transform: uppercase;
   display: flex;
   justify-content: space-between;
   transform: translateY(10px);
   width: 100%;

   p {
      font-weight: 500;
      cursor: pointer;
      font-size: 13px;
   }

   p:hover {
      font-weight: bolder;
   }

   img {
      margin-left: 3rem;
      height: 18px;
   }

   span {
      color: black;
      background: whitesmoke;
      padding: 0px 5px;
      border-radius: 3px;
      font-size: 13px;
   }
`;
