import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaProdutos from '../../components/listaComponentes/ListaComponentes';

import './Catalogo.css'


function Produtos() {

    const { categoria } = useParams<{ categoria: string }>();
    const [categoriaState, setCategoriaState] = useState('TODOS');
    const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoriaState(e.currentTarget.value)
        console.log(categoriaState)
    };
    useEffect(() => {
        if (categoria === undefined) {
            setCategoriaState('TODOS')
        } else {
            setCategoriaState(categoria)
        }
    }, [categoria])
    return (
        <>
            <Navbar />
            <div id='page_catalogo'>
                <section>

                    <h2 className='categoStyle'>Categoria</h2>

                    <div className='filtroStyle'>
                        <label>
                            <input type="radio" name="categoria" value="TODOS" onChange={(e) => onChangeCategory(e)} />
                            Todos
                        </label>
                    </div>

                    <div className='filtroStyle'>
                        <label>
                            <input type="radio" name="categoria" value="Água doce" onChange={(e) => onChangeCategory(e)} />
                            Água doce
                        </label>
                    </div>

                    <div className='filtroStyle'>
                        <label>
                            <input type="radio" name="categoria" value='Água salgada' onChange={(e) => onChangeCategory(e)} />
                            Água salgada
                        </label>
                    </div>

                    <div className='filtroStyle'>
                        <label>
                            <input type="radio" name="categoria" value='Camarões' onChange={(e) => onChangeCategory(e)} />
                            Camarões
                        </label>
                    </div>

                    <div className='filtroStyle'>
                        <label>
                            <input type="radio" name="categoria" value='Caranguejos' onChange={(e) => onChangeCategory(e)} />
                            Caranguejos
                        </label>
                    </div>
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