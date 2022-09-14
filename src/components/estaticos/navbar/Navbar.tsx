import React from "react";
import { Box } from "@material-ui/core";
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="topnav1">
                <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1019613912817221682/nomelogo.png" height={150} width={800} alt="" />
            </div>
            <div className="topnav">
                <a className="active" href="#inicio">Inicio</a>
                <a href="#catalogo">Catálogo</a>
                <a href="#sobre">Sobre nós</a>
                <a href="#contato">Contato</a>
            </div>

        </>
    );
}
export default Navbar;