import React, { Component } from 'react'

import './servicos.scss'

import ServicosIcone from '../../assets/imagens/servicos/sites.svg'
import EcommerceIcone from '../../assets/imagens/servicos/ecommerce.svg'
import LapisIcone from '../../assets/imagens/servicos/lapis.svg'

const Card = (props) => {
  return (
    <div className = 'card'>
      <div className = 'card__bolinha-icone'>
        <img src = { props.icone } alt = { props.titulo } />
      </div>
      <h3 className = 'card__titulo'>{ props.titulo }</h3>
      <h4 className = 'card__descricao'>{ props.descricao }</h4>
    </div>
  )
}

export default class Servicos extends Component {
  render() {

    return (
      <div className = 'servicos'>
        <div className = 'servicos__conteudo'>
          <div className = 'servicos__card-container'>
            <Card
              titulo = 'Desenvolvimento de sites'
              descricao = 'Criação de sites focados em UX/UI, responsivos, integrados com Analytics, certificado SSL (cadeado de site seguro) otimizados para SEO e com alta performance.'
              icone = { ServicosIcone }
            />
          </div>
          <div className = 'servicos__card-container'>
            <Card
              titulo = 'Criação de e-commerce'
              descricao = 'Plataforma completa de e-commerce gerenciável, com controle de estoque, cálculo de frete e pagamento via PagSeguro e Mercado Pago.'
              icone = { EcommerceIcone }
            />
          </div>
          <div className = 'servicos__card-container'>
            <Card
              titulo = 'Identidade visual e outros'
              descricao = 'Criação de logo e desenvolvimento do manual da marca, posts para redes sociais, materiais digitais e impressos e outros materiais auxiliares de branding.'
              icone = { LapisIcone }
            />
          </div>
        </div>
      </div>
    )

  }

}
