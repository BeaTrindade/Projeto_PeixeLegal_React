import React, { useState } from 'react';
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaComponentes from '../../components/listaComponentes/ListacComponentes';
import './Catalogo.css'

function Produtos() {

    const [categoriaState, setCategoriaState] = useState('PRODUTOS');

    const onRadioChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoriaState(e.currentTarget.value)
    };

    return (
        <>
            <Navbar />
            <div id='page_catalogo'>

                <section>

                        <h2>Categoria</h2>
                        <label htmlFor="Todos Produtos" className='items'>
                            <input type="radio" name="categoria" id='Todos Produtos' value="" onChange={(e) => onRadioChangeCategory(e)} defaultChecked />
                            Todos Produtos
                        </label>

                        <label htmlFor="Agua Doce" className='items'>
                            <input type="radio" name="categoria" id='Agua Doce' value="AGUA DOCE" onChange={(e) => onRadioChangeCategory(e)} />
                            Àgua Doce
                        </label>

                        <label htmlFor="Agua Salgada" className='items'>
                            <input type="radio" name="categoria" id='Agua Salgada' value="AGUA SALGADA" onChange={(e) => onRadioChangeCategory(e)} />
                            Àgua Salgada
                        </label>

                        <label htmlFor="Camarões" className='items'>
                            <input type="radio" name="categoria" id='Camarões' value="CAMAROES" onChange={(e) => onRadioChangeCategory(e)} />
                            Camarões
                        </label>
                        <label htmlFor="Caranguejos" className='items'>
                            <input type="radio" name="categoria" id='Caranguejos' value="CARANGUEIJOS" onChange={(e) => onRadioChangeCategory(e)} />
                            Caranguejos
                        </label>


                </section>

                <section>
                    <h1>Listagem</h1>
                    <ListaComponentes categoria={categoriaState} />
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Produtos;