import React from 'react'
import women from '../../assets/women clothes.webp'
import men from '../../assets/men clothes.webp'
import {
  BannerWrapper,
  ImageWrapper
} from './BannerStyles'

const Banner = () => {
  return (
    <>
      <BannerWrapper>
        <ImageWrapper>
          <img src={women} alt="women clothes"/>
          <button>Women's Shop</button>
          <p>Ipsum cupidatat minim incididunt irure ut fugiat nisi ex laboris. Nostrud culpat deserunt tempor id officia. In eu laborum excepteur eiusmod amet laborist.</p>
        </ImageWrapper>
        <ImageWrapper>
          <img src={men} alt="women clothes"/>
          <button>men's Shop</button>
          <p>Eiusmod cillum Lorem quis enim eiusmod qui mollit. Duis sint deserunt minim tempor et nisi proident magna sunt sit Lorem. Duis elit laboris id elit.</p>
        </ImageWrapper>
      </BannerWrapper>
    </>
  )
}

export default Banner
