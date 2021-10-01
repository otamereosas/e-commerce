import styled from "styled-components";

export const SideNavWrapper = styled.div`
  background: black;
  height: 100vh;
  width: 300px;
  padding: 2rem;
  color: white;

  h1, h3{
    font-weight: 400;
    padding-top: 1rem;
  }
  
  h3{
    text-transform: capitalize;
  }

  img{
    width: 140px;
    margin-top: 1rem;
  }

  button{
    background: red;
    margin-top: 1rem;
  }
`