import React, { Component } from 'react'

import './carregando.scss'

export default class Carregando extends Component {
  render() {
    return (
      <div className = 'carregando'>
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    )
  }
}
