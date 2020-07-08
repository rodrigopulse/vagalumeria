import React, { Component } from 'react'
import Lottie from 'react-lottie'
import Fade from 'react-reveal/Fade';

import './hero.scss'

import animationData from '../../assets/imagens/hero/animacao-hero.json'
import BgHeader from '../../assets/imagens/hero/bg-hero.jpg'

export default class Hero extends Component {

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (

      <div className = 'hero' style = {{ backgroundImage: `url(${BgHeader})` }} >

        <Lottie style={{right: 0, position: 'absolute'}} options={defaultOptions}
          height={'100%'}
          width={'auto'} />

        <div className = 'container container--flex-height'>
          <div className = 'hero__conteudo'>
            <Fade bottom>
              <h1 className = 'hero__titulo'>crie seu site e decole nas vendas!</h1>
            </Fade>
          </div>
        </div>

      </div>

    )
  }

}
