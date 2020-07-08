import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './portfolio.scss';

const CardPortfolio = () => {
  return (
    <div className = 'card-portfolio'>
      <p style = {{padding: 0, margin: 0}}>teste</p>
    </div>
  )
}
export default class Portfolio extends Component {

  render() {

    return (

    <Swiper
      spaceBetween={0}
      slidesPerView={5}
    >
      <SwiperSlide>
        <CardPortfolio />
      </SwiperSlide>
    </Swiper>

    )

  }

}
