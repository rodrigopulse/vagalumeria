import React, { Component } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import PortfolioJson from '../../assets/portfolio.json'

import 'swiper/components/navigation/navigation.scss'
import 'swiper/swiper.scss';
import './portfolio.scss';

SwiperCore.use([Navigation]);

const CardPortfolio = (props) => {
  return (
    <div className = 'card-portfolio'>
      <div className = 'card-portfolio__conteudo'>
        <p className = 'card-portfolio__texto'> { props.titulo } </p>
      </div>
      <img className = 'card-portfolio__imagem' src = { props.thumb } alt = { props.titulo } />
    </div>
  )
}
export default class Portfolio extends Component {

  render() {

    return (

    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      navigation
    >
      { PortfolioJson.map( (valor, index) => (
        <SwiperSlide key = { index } >
            <CardPortfolio titulo = { valor.titulo } thumb = { valor.thumb } />
        </SwiperSlide>
      ) ) }
    </Swiper>

    )

  }

}
