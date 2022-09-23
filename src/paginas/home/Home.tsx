import React from 'react';
import CarouselManipulateState from "../../components/estaticos/carousel/Carouselmani";
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import CarouselCard from '../../components/carouselcard/CarouselCard';
import { toast } from "react-toastify";
import "./Home.css"
import { Grid } from '@mui/material';
import TComponentes from '../../tabComponentes/TCompoentes';
import { Link } from 'react-router-dom';

function Home() {
    const aaaa = () => toast.success('Notícia deletada com sucesso');

    return (


        <main id='meiohome' className='homeback'>

            <Navbar />
            <div>
                <CarouselManipulateState />
                {/* <button onClick={aaaa} /> */}


                <article id='homefoto' >
                    <a >
                        <Link to={`/Catalogo/Caranguejos`}>
                            <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165584342978740/caranguejo.png" />
                            <h3>Caraguejos</h3>
                        </Link>
                    </a>
                    <a >
                        <Link to={`/Catalogo/Camarões`}>
                            <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165596472905728/camarao.png" />
                            <h3>Camarões</h3>
                        </Link>
                    </a>
                    <a >
                        <Link to={`/Catalogo/Água doce`}>
                            <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165611475935273/doce.png" />
                            <h3>Água doce</h3>
                        </Link>
                    </a>
                    <a >
                        <Link to={`/Catalogo/Água salgada`}>
                            <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165634200682568/salgado.png" />
                            <h3>Água salgada</h3>
                        </Link>
                    </a>
                </article>

                <div className='configCardHome'>
                    <div className='cardHome'>
                        <img id='img-cardHome' src={'https://media.discordapp.net/attachments/1001812118422695987/1016711851452669962/unknown.png?width=899&height=599'} />
                        <h2>Tambaqui</h2>
                        <h5 className='mg-topHome'>Água doce</h5>
                        <a href='/sobrenos' className='btn-ajudarHome'>COMPRE DE UM PESCADOR ARTESANAL </a>
                    </div>

                    <div className='cardHome'>
                        <img id='img-cardHome' src={'https://media.discordapp.net/attachments/1001812118422695987/1016710168140054528/Dourado_Do_Mar.png?width=902&height=619'} />
                        <h2>Dourado do mar</h2>
                        <h5 className='mg-topHome'>Água salgada</h5>
                        <a href='/sobrenos' className='btn-ajudarHome'>COMPRE DE UM PESCADOR ARTESANAL </a>
                    </div>

                    <div className='cardHome'>
                        <img id='img-cardHome' src={'https://media.discordapp.net/attachments/1001812118422695987/1016725041989296128/unknown.png?width=648&height=487'} />
                        <h2>Camarão Sete Barbas</h2>
                        <h5 className='mg-topHome'>Camarão</h5>
                        <a href='/sobrenos' className='btn-ajudarHome'>COMPRE DE UM PESCADOR ARTESANAL </a>
                    </div>

                    <div className='cardHome'>
                        <img id='img-cardHome' src={'https://media.discordapp.net/attachments/1001812118422695987/1016758699576008704/unknown.png?width=540&height=345'} />
                        <h2>Uça</h2>
                        <h5 className='mg-topHome'>Caranguejo</h5>
                        <a href='/sobrenos' className='btn-ajudarHome'>COMPRE DE UM PESCADOR ARTESANAL </a>
                    </div>

                    <div className='cardHome'>
                        <img id='img-cardHome' src={'https://media.discordapp.net/attachments/1001812118422695987/1016712367066845284/Anchova.png?width=902&height=602'} />
                        <h2>Anchova</h2>
                        <h5 className='mg-topHome'>Água salgada</h5>
                        <a href='/sobrenos' className='btn-ajudarHome'>COMPRE DE UM PESCADOR ARTESANAL </a>
                    </div>

                </div>


            </div>
            <Footer />



        </main >
    );
}

export default Home;