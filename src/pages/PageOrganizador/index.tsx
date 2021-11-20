//import axios from 'axios';
import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/Header';
import PageMenu from '../../components/MenuLateral';
import PageFooter from '../../components/Footer/footer';
import PageTitulo from '../../components/Titulo';
import api from '../../services/api';
import './organizador.css'
import Pagelogo from '../../components/logo';

function Pageorganizador(){

    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');

    function criarCategoria(e:FormEvent) {
      e.preventDefault();
          api.put('/organizador',  {
          nome,
          telefone,
          endereco,
          email
          }).then(config => {
            // console.log(config)
                  localStorage.setItem('token', config.data.token) 
          }).catch(() =>{
                  alert('Usuário ou senha incorretos!')
              }
          )
    }
    return(
    <div>
      <div>
        <PageHeader />
      </div>
      {/* <div className="hh">
        <PageMenu />
      </div> */}
      <div>
        <PageTitulo title="Meus Dados"/>
      </div>
      <main className="main_evento">    
          <form className="form_border" onSubmit={criarCategoria}>
              <div className="form-group">
                  <label className="form_label">Nome</label>
                  <input type="text" className="form-control form_input"
                   name="nome" 
                   value={nome}
                   onChange={(e) =>{setName (e.target.value)}}
                   />

              </div>
              <div className="form-group">
                  <label className="form_label">Telefone</label>
                  <input type="text" className="form-control form_input"
                  name="telefone"
                  value={telefone}
                  onChange={(e) =>{setTelefone (e.target.value)}}
                  />
              </div>
              <div className="form-group">
                  <label className="form_label">Endereço</label>
                  <input name="endereco" type="text" className="form-control form_input"placeholder="Ex: Rua A, n° 000, Bairro"
                  value={endereco}
                  onChange={(e) => {setEndereco (e.target.value)}}
                  />
              </div>
              <div className="form-group">
                  <label className="form_label">Email</label>
                  <input name="email" type="text" className="form-control form_input"
                  value={email}
                  onChange={(e) => {setEmail (e.target.value)}}
                  />
              </div>
          </form>
             <button className="btn_event" type="submit">Salvar</button>
             <button className="btn_event">Cancelar</button> 
      </main>
      <div >
        <PageFooter/>
      </div>
  </div>
    )
}
export default Pageorganizador ;