import React from "react";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import WhatsApp from "@material-ui/icons/WhatsApp"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './Navbar.css';

function Navbar() {
    return (
        <main id="nav">
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
                    <a href="/Login">
                        <AccountCircleIcon style={{ fontSize: 50 }} />
                    </a>
                </section>
            </section>

            <section id="topnav">

                <a href="/Home">
                    Inicio <HomeIcon className="opaco" />
                </a>

                <a href="/Catalogo">
                    Catálogo <MenuBookIcon className="opaco" />
                </a>

                <a href="/Sobrenos">
                    Sobre nós <PeopleAltIcon className="opaco" />
                </a>

                <a href="/Contato">
                    Contato <CallIcon className="opaco" />
                </a>
                <div>
                    <a href="/cart">
                        <ShoppingCartIcon />
                    </a>
                </div>
                <div>
                    <a href="/Login">
                       <AccountCircleIcon /> 
                    </a>
                </div>


            </section>
        </main>
    );
}
export default Navbar;