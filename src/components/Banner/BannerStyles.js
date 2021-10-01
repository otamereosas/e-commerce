import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100vh;
  width: 110%;
  justify-content: center;
  overflow-y: hidden;


  img{
    object-fit: cover;
    position: absolute;
    width: 100%;
    transform: translateY(199px);
  }

  p, button{
    z-index: 5;
    width: 200px;
    margin-left: 3rem;
    font-weight: 500;
    line-height: 1.5;
  }
  P{
    width: 50%;
    font-weight: bolder;
    margin-top: 1rem;
  }

`