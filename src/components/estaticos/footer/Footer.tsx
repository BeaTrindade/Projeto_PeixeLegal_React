import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className='foooter'>
                <div className='waves'>
                    <div className='wave'></div>
                    <div className='wave'></div>
                    <div className='wave'></div>
                </div>

                <div className="container-footer">

                    <div className="row-footer">
                        <div className="footer-col">
                            <div className="logo">
                                <img src="https://media.discordapp.net/attachments/607999666839093248/1018176152768102573/menino.png?width=567&height=563"
                                    alt="" />
                            </div>
                        </div>

                        <div className='footer-col'>
                            <ul>
                                <li><h4>Central</h4></li>
                                <li><a href="#">(11) 0000-0000</a></li>
                                <li><h4>SAC</h4></li>
                                <li><a href="#">0800 000 000</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Dúvidas</h4>
                            <ul>                            
                                <li><a href="/Contato">Quem somos</a></li>
                                <li><a href="/Catalogo">Nossos serviços</a></li>
                                <li><a href="/SobreNos">Política de privacidade</a></li>
                                <li><a href="/Catalogo">Status De Pedido</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <div className="midias-socias">
                                <h3>Redes Sociais</h3>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <a href="https://www.facebook.com/"> <i className="fa fa-facebook"></i> </a>
                                <a href="https://www.instagram.com/"> <i className="fa fa-instagram"></i> </a>
                                <a href="https://web.whatsapp.com/"> <i className="fa fa-whatsapp"></i> </a>
                                <a href="https://www.google.com/intl/pt_br/gmail/about/"> <i className="fa fa-envelope"></i></a>
                            </div>
                            <h3>Formas de Pagamento</h3>
                            <div>                                
                                    <img className="tm-money"
                                        src="https://media.discordapp.net/attachments/607999666839093248/1018184998781726790/mastercard-logo.png?width=724&height=435"
                                        alt="MasterCard" />

                                    <img className="tm-money"
                                        src="https://media.discordapp.net/attachments/607999666839093248/1018184988220473364/Visa_Logo.png?width=724&height=435"
                                        alt="Visa" />
                                
                                    <img className="tm-money"
                                        src="https://media.discordapp.net/attachments/607999666839093248/1018858832195244062/elo-logo.png?width=724&height=435"
                                        alt="Elo" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="box_copyright">
                    
                    <p><b>Peixe Legal ©</b> 2022</p>
                </div>
            </div>
        </>
    );
}

export default Footer;