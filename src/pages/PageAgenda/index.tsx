import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import teste from '../../assets/LogoMatheus/Eventos.jpg'
import './agenda.css';
import '../../assets/styles/global.css';
import PageHeader from '../../components/Header';
// import PageMenu from '../../components/MenuLateral';
import PageFooter from '../../components/Footer/footer';
//import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup'
//import { maxHeaderSize } from 'http';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageTitulo from '../../components/Titulo';
//import api from '../../services/api';
import Lixeira from '../../assets/LogoMatheus/Icons/delete.png';
import Mais from '../../assets/LogoMatheus/Icons/mais.png';
 
function PageAgenda() {
    
  // componentDidMount(){
  //   const token = localStorage.getItem('token');
  //     var config ={
  //       headers:{
  //       Authorization: 'Bearer' + token
  //       }
  //     }
  //     api.get("/evento", config).then(
        
  //     )
  //   }
  


        return (
            <div>
                <div>
                    <PageHeader />
                </div>
                {/* <div className="hh">
                    <PageMenu />
                </div> */}
                <div>
                  <PageTitulo title="Eventos"/>
                </div>
                {/* <div>
                  <h1 className="main_h1_Sub">Últimos Eventos Cadastrados</h1>
                </div> */}
                <main className="page_main_agenda"> 
                <div className="card_pad">
                  {/* essa parte cuida do card da pagina inicial */}
                    <Row xs={1} md={3} className="">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Col>
                      <div className="card card_m card_border" style={{width: '20rem'}}>
                          <img className="card-img-top card_border_img" src={teste} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Titulo</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/DadosEventos" className="btn btn-primary"><img src={Mais} alt="delete" style={{width:'20px'}}/>Ver Mais</NavLink>
                                <button className="btn btn-danger" style={{marginLeft:'80px'}}><img src={Lixeira} alt="delete" style={{width:'20px'}}/>Excluir</button>
                            </div> 
                          </div>
                    </Col>
                    ))}
                  </Row>      
                </div>
                </main> 
                <div >
                  <PageFooter/>
                </div>
                
            </div>
            
        )
    }
  export default PageAgenda;

