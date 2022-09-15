import React from "react";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import WhatsApp from "@material-ui/icons/WhatsApp"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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

                <article>
                <a href="/home">
                <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1019613912817221682/nomelogo.png" height={100} width={450} alt="" />
                </a>
                </article>              

                <div>
                    <a href="/cart">
                        <ShoppingCartIcon style={{ fontSize: 50 }} />
                    </a>
                    <a href="/Login">
                        <AccountCircleIcon style={{ fontSize: 50 }} />
                    </a>
                </div>
            </section>

            <section id="topnav">
            <div>
                <a href="/Home">Inicio</a>
                <a href="/Catalogo">Catálogo</a>
                <a href="/Sobrenos">Sobre nós</a>
                <a href="/Contato">Contato</a>
            </div>
            </section>
        </main>
    );
}
export default Navbar;