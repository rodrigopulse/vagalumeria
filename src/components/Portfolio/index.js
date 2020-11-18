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
    tituloModal: '',
    subtituloModal: '',
    imagens: [],
    video: '',
    sliderPerView: 0
  }

  constructor() {
    super()
    this.abreModal = this.abreModal.bind(this);
  }

  abreModal(conteudo){
    if(this.state.modal) {
      this.setState({
        modal: false,
        tituloModal: '',
        subtituloModal: '',
        imagens: []
      })
    } else {
      this.setState({
        modal: !this.state.modal,
        tituloModal: conteudo.titulo,
        subtituloModal: conteudo.subtitulo,
        imagens: conteudo.imagens,
        video: conteudo.video
      })
    }
  }

  componentDidMount() {
    if(window.innerWidth <= 768) {
      console.log('mobile')
      this.setState({
        sliderPerView: 3
      })
    } else {
      this.setState({
        sliderPerView: 5
      })
    }
  }

  render() {

    return (
      <div className = 'container container--full'>
        {this.state.modal &&
          <div className = 'modal-portfolio'>
            <button onClick = { () => { this.abreModal('') }} className = 'modal-portfolio__fechar'>
              <img src = { BotaoFechar } alt = 'Fechar' />
            </button>
            <div className = 'modal-portfolio__conteudo'>
              <h3 className = 'modal-portfolio__titulo'> { this.state.tituloModal } </h3>
              { this.state.subtituloModal !== '' &&
                <h4 className = 'modal-portfolio__subtitulo'> { this.state.subtituloModal } </h4>
              }
              {this.state.video !== '' &&
                <div className="video-wrapper">
                  <iframe width="560" height="315" src={this.state.video} title="Vídeo Portfolio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              }
              { this.state.imagens.length >= 1 &&
                this.state.imagens.map ( (valor, index) => (
                  <img className="modal-portfolio__imagem" key = { index } src = { valor.imagem } alt = 'portfolio' />
                ))
              }
            </div>
            <div className = 'modal-portfolio__overlay' onClick = { () => { this.abreModal('') }}></div>
          </div>
        }
        {this.state.sliderPerView !== 0 &&
        <Swiper
            spaceBetween={0}
            slidesPerView={this.state.sliderPerView}
            navigation
          >
            { PortfolioJson.map( (valor, index) => (
              <SwiperSlide key = { index }  onClick = { () => this.abreModal(valor.conteudo) }>
                  <CardPortfolio titulo = { valor.titulo } thumb = { valor.thumb } />
              </SwiperSlide>
            ) ) }
          </Swiper>
        }
      </div>
    )

  }

}
