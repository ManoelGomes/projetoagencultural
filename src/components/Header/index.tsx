import React/*, { useState, useEffect }*/ from 'react'
//import imgta from '../../assets/LogoMatheus/LogoMatheus.png';
//import imguser from '../../assets/LogoMatheus/Icons/user_icon2.svg';
import './header.css'
//import api from '../../services/api';
import PageMenu from '../MenuLateral';

function PageHeader(){

    // const [NomeUsuario, setNomeUsuario] = useState('');

    // useEffect(() => {
    //     api.get('organizador/eventos').then(response => {
    //        console.log(response)
    //        setNomeUsuario(NomeUsuario);
    //     })
    // },[]);
    return(
        <header>
            
            <div className="header2" data-testid="Page_1">
                
                    <div className="header_top">
                        {/* <img src={imgta} alt="" className="imgLogoIni" /> */}
                        <PageMenu/> 
                        <div className="header_top_text teste">
                        {/* <img src={imguser} alt="user" className="imgicon" />     */}   
                            {/* <h4>Olá, {NomeUsuario}</h4>  */}
                        </div> 
                        
                    </div>
            </div>        
        </header>  
    )
}
export default PageHeader;