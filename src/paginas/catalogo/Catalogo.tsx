import React, { useState } from 'react';
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaProdutos from '../../components/listaComponentes/ListaComponentes';

import './Catalogo.css'


function Produtos() {

    const [categoriaState, setCategoriaState] = useState('TODOS');

    const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                            <input type="radio" name="categoria" value="TODOS" onChange={(e) => onChangeCategory(e)}  defaultChecked />
                            Todos Produtos
                        </label>

                        <label>
                            <input type="radio" name="categoria" value="Água doce" onChange={(e) => onChangeCategory(e)}  />
                            Água Doce
                        </label>

                        <label>
                            <input type="radio" name="categoria" value='Água salgada' onChange={(e) => onChangeCategory(e)}  />
                            Água Salgada
                        </label>

                        <label>
                            <input type="radio" name="categoria" value='Camarões' onChange={(e) => onChangeCategory(e)}  />
                            Camarões
                        </label>
                        <label>
                            <input type="radio" name="categoria" value='Caranguejos' onChange={(e) => onChangeCategory(e)}  />
                            Caranguejos
                        </label>


                </section>

                <section>
                    <ListaProdutos categoria={categoriaState} />
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Produtos;