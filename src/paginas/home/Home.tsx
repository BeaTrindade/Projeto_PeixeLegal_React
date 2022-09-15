import React from 'react';
import CarouselManipulateState from "../../components/estaticos/carousel/Carouselmani";
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import CarouselCard from '../../components/carouselcard/CarouselCard' ;
import { toast } from "react-toastify";

import "./Home.css"


function Home() {
    const aaaa= ()=> toast.success('Notícia deletada com sucesso');
    
    return (
        <main id='meiohome' >
            <Navbar />
            <CarouselManipulateState />
            {/* <button onClick={aaaa} /> */}
            <article id='homefoto' >
                <a href='/temas'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165584342978740/caranguejo.png" />
                <h3>Caragueijos</h3>
                </a>
                <a href='/temas'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165596472905728/camarao.png" />
                <h3>Camarões</h3>
                </a>
                <a href='/temas'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165611475935273/doce.png" />
                <h3>Agua Doce</h3>
                </a>
                <a href='/temas'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165634200682568/salgado.png" />
                <h3>Agua Salgada</h3>
                </a>
            </article>
            <CarouselCard />
            <Footer />

        </main>
    );
}

export default Home;