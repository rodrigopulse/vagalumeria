import React, { Component } from 'react'

import './footer.scss'

import LogoAvatar from '../../assets/imagens/footer/logo-avatar.svg'
import WhatsApp from '../../assets/imagens/footer/whatsapp.svg'

export default class index extends Component {
  render() {
    return (
      <div className = 'container container--full footer'>
        <div className = 'container footer__conteudo'>
          <img src = { LogoAvatar } className = 'footer__logo-avatar' alt = 'Vagalumeria' />
          <div className = 'footer__whats'>
            <img className = 'footer__icone-whats' src = { WhatsApp } alt = 'Whats App' />
            <span className = 'footer__texto'>(11) 9 8892-7219</span>
          </div>
          <span className = 'footer__texto'>contato@vagalumeria.com.br</span>
        </div>
      </div>
    )
  }
}
