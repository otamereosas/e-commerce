import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  padding: 1.5rem 5rem ;
  color: black;
  
  h1{
    color: black;
    font-weight: 500;
  }

  .home{
    display: flex;
    min-width: 230px;
    justify-content: space-between;
  }

  .search{
    height: 30px;
    transform: translateY(5px)
  }
`

export const NavLinks = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  transform: translateY(10px);

  .lastChild{
    margin-left: 3rem;
  }
  
  p{
    color: black;
    font-weight: 500;
    cursor: pointer;
  }
  
  p:hover{
    font-weight: bolder;
  }
  
  img{
    margin-left: 3rem;
    height: 20px;
  }

`