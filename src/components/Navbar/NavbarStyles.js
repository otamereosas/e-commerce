import styled from "styled-components";

export const NavWrapper = styled.div`
   /* position: fixed; */
   /* padding-top: 2rem; */
   width: 100%;
   
   input {
     width: 50%;
     min-width: 300px;
     max-width: 600px;
     padding: 12px;
     border-radius: 20px;
     transform: translateY(-70%);
    }
    `;

export const Nav = styled.div`
   width: 100%;
   background: linear-gradient(81.64deg, #ffb800 34.46%, #ff7a00 87.54%);
   /* position: fixed; */
   display: flex;
   justify-content: space-between;
   z-index: 2;
   padding: 1.5rem 5rem 4rem;
   color: black;

   h1 {
      color: black;
      font-weight: 500;
      font-size: clamp(10px, 5vw, 27px);
   }

   .home {
      display: flex;
      min-width: 230px;
      justify-content: space-between;
   }
`;

export const NavLinks = styled.div`
   text-transform: uppercase;
   display: flex;
   justify-content: space-between;
   transform: translateY(10px);

   .lastChild {
      margin-left: 3rem;
   }

   p {
      color: black;
      font-weight: 500;
      cursor: pointer;
   }

   p:hover {
      font-weight: bolder;
   }

   img {
      margin-left: 3rem;
      height: 20px;
   }
`;
