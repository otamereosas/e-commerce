import styled from "styled-components";
export const Main = styled.div`
  width: 90%;
  margin: auto;
  padding: 50px;
  text-align: center;

  h1{
    margin: 2rem;
    font-weight: 500;
  }

  h1{
    font-weight: 500;
  }
  @media screen and (max-width: 799px){
    width: 100%;
  }
`
export const ProductWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 799px){
    display: block;
  }
`
export const ProductCard = styled.div`
  width: 18%;
  margin-bottom: 2rem;
  box-shadow: 0px 0.2px 2px gray;
  padding-bottom: 1rem;
  border-radius: 5px;
  overflow: hidden;



  img{
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h3{
    font-weight: 500;
    text-transform: capitalize;
  }
  p{
    font-weight: bolder;
    margin: 5px;
  }

  @media screen and (max-width: 799px){
    width: 100%;
    display: flex;
    height: 190px;

    img{
      height: 190px;
      width: 150px;
      object-fit: cover;
    }
    button{
      height: 35px;
      width: 120px;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: start;
      padding: 20px;
    }
  }

`