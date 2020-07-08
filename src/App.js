import React from 'react'

// Components
import Header from './components/Header'
import Hero from './components/Hero'

import './App.scss'
export default class LottieControl extends React.Component {

  render() {

    return (
      <div className = 'wrapper'>
        <Header />
        <Hero />
      </div>
    )
  }
}