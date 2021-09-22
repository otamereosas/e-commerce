import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  padding: 1rem 5rem ;

  h1{
    color: black;
    font-weight: 500;
  }
`

export const NavLinks = styled.div`
  text-transform: uppercase;
  width: 10%;
  min-width: 130px;
  display: flex;
  justify-content: space-between;
  transform: translateY(10px);

  p{
    color: black;
    font-weight: 500;
  }

  p:hover{
    font-weight: bolder;
  }
`