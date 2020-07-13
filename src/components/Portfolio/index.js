import React, { Component } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import PortfolioJson from '../../assets/portfolio.json'

import BotaoFechar from '../../assets/imagens/portfolio/fechar.svg'

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
  state = {
    modal: false,
    tituloModal: ''
  }

  constructor() {
    super()
    this.abreModal = this.abreModal.bind(this);
  }
  abreModal(conteudo){
    this.setState({
      modal: !this.state.modal,
      tituloModal: conteudo.titulo
    })
  }
  render() {

    return (
      <div className = 'container container--full'>
        {this.state.modal &&
          <div className = 'modal-portfolio'>
            <div className = 'modal-portfolio__conteudo'>
              <button onClick = { () => { this.abreModal('') }} className = 'modal-portfolio__fechar'>
                <img src = { BotaoFechar } alt = 'Fechar' />
              </button>
              <h3 className = 'modal-portfolio__titulo'> { this.state.tituloModal } </h3>
            </div>
          </div>
        }
        <Swiper
          spaceBetween={0}
          slidesPerView={5}
          navigation
        >
          { PortfolioJson.map( (valor, index) => (
            <SwiperSlide key = { index }  onClick = { () => this.abreModal(valor.conteudo) }>
                <CardPortfolio titulo = { valor.titulo } thumb = { valor.thumb } />
            </SwiperSlide>
          ) ) }
        </Swiper>
      </div>
    )

  }

}
