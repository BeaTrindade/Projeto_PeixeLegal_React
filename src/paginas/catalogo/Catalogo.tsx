import React, { useState } from 'react';
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaComponentes from '../../components/listaComponentes/ListaComponentes';

import './Catalogo.css'


function Produtos() {

    const [categoriaState, setCategoriaState] = useState('TODOS2');

    const onRadioChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoriaState(e.currentTarget.value)
        console.log(categoriaState)
    };

    return (
        <>
            <Navbar />
            <div id='page_catalogo'>

                <section>
                
                        <h2>Categoria</h2>
                        <label>
                            <input type="radio" name="teste" value="TODOS2" onChange={(e) => onRadioChangeCategory(e)}  defaultChecked />
                            Todos Produtos
                        </label>

                        <label>
                            <input type="radio" name="teste"  onChange={(e) => onRadioChangeCategory(e)}  />
                            Àgua Doce
                        </label>

                        <label>
                            <input type="radio" name="teste" onChange={(e) => onRadioChangeCategory(e)}  />
                            Àgua Salgada
                        </label>

                        <label>
                            <input type="radio" name="teste" onChange={(e) => onRadioChangeCategory(e)}  />
                            Camarões
                        </label>
                        <label>
                            <input type="radio" name="teste"   />
                            Caranguejos
                        </label>


                </section>

                <section>
                    <ListaComponentes categoria={categoriaState} />
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Produtos;