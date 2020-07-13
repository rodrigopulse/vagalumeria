import React, { Component } from 'react'

import './depoimentos.scss'

const Quadro = (props) => {
  return (
    <div className = 'depoimentos__quadro'>
      <div className = 'depoimentos__conteudo'>
        <p className = 'depoimentos__texto'> { props.depoimento } </p>
        <p className = 'depoimentos__nome'> {props.nome } </p>
      </div>
    </div>
  )
}
export default class Depoimentos extends Component {
  render() {
    return (
      <div className = 'container depoimentos'>
        <h3 className = 'depoimentos__titulo'>Depoimentos</h3>
        <div className = 'container container--flex'>
          <Quadro
            nome = 'Gabriela - Diretora da MK1 Performance'
            depoimento = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus gravida augue. Vivamus elementum posuere quam volutpat scelerisque.”'
          />
          <Quadro
            nome = 'Gabriela - Diretora da MK1 Performance'
            depoimento = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus gravida augue. Vivamus elementum posuere quam volutpat scelerisque.”'
          />
        </div>
      </div>
    )
  }
}
