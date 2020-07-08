import React, { Component } from 'react'

import './header.scss'

import Logo from '../../assets/imagens/header/logo.svg'

export default class Header extends Component {
  render() {
    return (
      <div className = 'header'>
        <div className = 'header__conteudo'>
          <img src = { Logo } alt = 'Logo Vagalumeria'/>
        </div>
      </div>
    )
  }
}
