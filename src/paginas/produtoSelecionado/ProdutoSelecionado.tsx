import './ProdutoSelecionado.css';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';

function ProdutoSelecionado() {

    const [quantity, setQuantity] = useState(1);

    function addQuantity() {
        setQuantity(quantity + 1)
    }
    function subQuantity() {
        const newQuantity = quantity - 1;
        (newQuantity > 0) ? setQuantity(newQuantity) : alert("Quantidade não pode ser zero!");
    }

    return (
        <>
            <Navbar/>
                <div id='container'>
                    <div id='Fotos do Peixe'>
                        <main className='corpo estilo'>
                <section className="carousel">
                    <div className="slides" >
                        <img className="slide" id="slide-1" src="https://media.discordapp.net/attachments/1018929311392202752/1019394769274798160/unknown.png" />
                        <img className="slide" id="slide-2" src="https://media.discordapp.net/attachments/1018929311392202752/1019395105653788702/unknown.png?width=976&height=670" />
                        <img className="slide" id="slide-3" src="https://media.discordapp.net/attachments/1018929311392202752/1019396000319815700/unknown.png" />
                        <img className="slide" id="slide-4" src="https://media.discordapp.net/attachments/1018929311392202752/1019395105653788702/unknown.png?width=976&height=670" />
                    </div>

                    <nav className="navigation">
                        <a href="#slide-1">1</a>
                        <a href="#slide-2">2</a>
                        <a href="#slide-3">3</a>
                        <a href="#slide-4">4</a>
                    </nav>
                </section>
            </main>
                    </div>
                        <div id='Dados-do-Peixe' className='detalhe'>
                            <h1 className="title">Teste Compra</h1>
                            <h2 className="preco"></h2>
                            <div className="quantidade">
                                <p className="label"></p>
                                <span className="selecionarQuantidade">
                                    <button onClick={subQuantity} className="minus">-</button>
                                    {quantity}
                                    <button onClick={addQuantity} className="plus">+</button>
                                </span>
                            </div>

                            <div className="actions">
                                <button className="buy">Comprar</button>
                                <button className="cart"></button>
                            </div>
                            <h4 className="estoque">Estoque Disponível</h4>
                        </div>
                </div>
            <Footer/>
        </>
    )
}

export default ProdutoSelecionado;