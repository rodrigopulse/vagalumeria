import React from 'react'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Portfolio from './components/Portfolio'
import Depoimentos from './components/Depoimentos'
import Contato from './components/Contato'

import './App.scss'
export default class LottieControl extends React.Component {

  render() {

    return (
      <div className = 'wrapper'>
        <Header />
        <Hero />
        <Servicos />
        <Portfolio />
        <Depoimentos />
        <Contato />
      </div>
    )
  }
}