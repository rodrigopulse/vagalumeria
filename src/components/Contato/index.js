import React, { Component } from 'react'
import axios from 'axios';

import Telefone from '../../assets/imagens/contato/telefone.svg'

import Carregando from '../Carregando'

import './contato.scss'

const Modal = () => {
  return (
    <div className = 'modal-mensagem'></div>
  )
}
export default class Contato extends Component {
  state = {
    carregando: false,
    showModal: false,
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  }
  handleSubmit(e) {
    e.preventDefault()
    const { nome, telefone, email, mensagem } = this.state
    const data = new FormData ()
    data.append ('nome', nome)
    data.append ('telefone', telefone)
    data.append ('email', email)
    data.append ('mensagem', mensagem)
    this.setState({carregando: true});
    axios.post('http://vagalumeria.com.br/sendmail/vagalumeria-contato.php', data)
    .then( () => {
			this.setState({
				nome: '',
				telefone: '',
        email: '',
        mensagem: '',
        carregando: false,
				showModal: true
			});
    })
    .catch( (response) => {
      this.setState({carregando: false});
      console.log(response);
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <div className = 'container container--full contato'>
        { this.state.carregando && <Carregando /> }
        { this.state.carregando && <Modal /> }
        <div className = 'container container--flex'>

          <div className = 'contato__esquerda'>
            <h3 className = 'contato__titulo'>Deixe seu projeto em boas mãos!</h3>
            <p className = 'contato__texto'>Solicite um orçamento! Preencha o formulário ao lado e entraremos em contato com você o mais rápido possível!</p>
            <img className = 'contato__imagem' src = {Telefone} alt = 'Contato' />
          </div>

          <div className = 'contato__direita'>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input className = 'contato__input' placeholder = 'nome' value={this.state.nome} onChange={this.handleChange.bind(this, 'nome')}/>
              <input className = 'contato__input' placeholder = 'telefone' value={this.state.telefone} onChange={this.handleChange.bind(this, 'telefone')}/>
              <input className = 'contato__input' placeholder = 'email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
              <textarea rows = '5' className = 'contato__textarea' placeholder = 'mensagem' value={this.state.mensagem} onChange={this.handleChange.bind(this, 'mensagem')}></textarea>
              <button type = 'submit' className = 'botao'>enviar</button>
            </form>
          </div>

        </div>
      </div>
    )
  }
}
