import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import WhatsApp from "@material-ui/icons/WhatsApp"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    function sair() {
        setToken('')
        alert('Você deslogou sua conta!')
        navigate('/Home')
    }

    

    if (token !== "") {
        return (
            <main id="nav">
                <div className='waves1'>
                    <div className='wave1'></div>
                    <div className='wave1'></div>
                    <div className='wave1'></div>
                </div>
                
                <section id="icon">
                    <section>
                        <a href="https://www.facebook.com/" target='bash'>
                            <Facebook style={{ fontSize: 50 }} />
                        </a>
                        <a href="https://www.instagram.com/" target='bash2'>
                            <Instagram style={{ fontSize: 50 }} />
                        </a>
                        <a href="https://web.whatsapp.com/" target='bash3'>
                            <WhatsApp style={{ fontSize: 50 }} />
                        </a>
                    </section>

                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1019613912817221682/nomelogo.png" alt="Logo" />

                    <section>
                        <a href="/cart">
                            <ShoppingCartIcon style={{ fontSize: 50 }} />
                        </a>
                        <a href="/Home" onClick={sair}>
                            <LogoutIcon style={{ fontSize: 50 }} />
                        </a>
                    </section>
                </section>

                <section id="topnav">

                    <a href="/Home">
                        Inicio <HomeIcon className="opaco" style={{ fontSize: 30 }} />
                    </a>

                    <a href="/Catalogo">
                        Catálogo <MenuBookIcon className="opaco" style={{ fontSize: 30 }}/>
                    </a>

                    <a href="/Sobrenos">
                        Sobre nós <PeopleAltIcon className="opaco" style={{ fontSize: 30 }}/>
                    </a>

                    <a href="/Contato">
                        Contato <CallIcon className="opaco" style={{ fontSize: 30 }}/>
                    </a>
                    <div>
                        <a href="/cart">
                            <ShoppingCartIcon className="opaco" style={{ fontSize: 30 }}/>
                        </a>
                    </div>
                    <div>
                        <a href="/Home" onClick={sair}>
                            <LogoutIcon className="opaco" style={{ fontSize: 30 }}/>
                        </a>
                    </div>


                </section>
            </main>
        );

    }
    else {

        return (
            <main id="nav">
                <div className='waves1'>
                    <div className='wave1'></div>
                    <div className='wave1'></div>
                    <div className='wave1'></div>
                </div>
                <section id="icon">
                    <section>
                        <a href="https://www.facebook.com/" target='bash'>
                            <Facebook style={{ fontSize: 50 }} />
                        </a>
                        <a href="https://www.instagram.com/" target='bash2'>
                            <Instagram style={{ fontSize: 50 }} />
                        </a>
                        <a href="https://web.whatsapp.com/" target='bash3'>
                            <WhatsApp style={{ fontSize: 0 }} />
                        </a>
                    </section>

                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1019613912817221682/nomelogo.png" alt="Logo" />

                    <section>
                        <a href="/cart">
                            <ShoppingCartIcon style={{ fontSize: 50 }} />
                        </a>
                        <a href="/login">
                            <AccountCircleIcon style={{ fontSize: 50 }} />
                        </a>
                    </section>
                </section>

                <section id="topnav">

                    <a href="/Home">
                        Inicio <HomeIcon className="opaco" style={{ fontSize: 30 }}/>
                    </a>

                    <a href="/Catalogo">
                        Catálogo <MenuBookIcon className="opaco" style={{ fontSize: 30 }}/>
                    </a>

                    <a href="/Sobrenos">
                        Sobre nós <PeopleAltIcon className="opaco" style={{ fontSize: 30 }}/>
                    </a>

                    <a href="/Contato">
                        Contato <CallIcon className="opaco" style={{ fontSize: 30 }}/>
                    </a>
                    <div>
                        <a href="/cart">
                            <ShoppingCartIcon className="opaco" style={{ fontSize: 30 }}/>
                        </a>
                    </div>
                    <div>
                        <a href="/login">
                            <AccountCircleIcon className="opaco" style={{ fontSize: 30 }}/>
                        </a>
                    </div>


                </section>
            </main>
        );
    }

}
export default Navbar;