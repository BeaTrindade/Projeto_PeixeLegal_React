import React , { useState } from 'react';
import ListaProdutos from '../../components/listaComponentes/ListacComponentes';

function Produtos() {

    const [categoriaState, setCategoriaState] = useState('PRODUTOS');
    const [ordemState, setOrdemState] = useState('NomeProduto');

    const onRadioChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoriaState(e.currentTarget.value)
    };

    const onRadioChangeOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrdemState(e.currentTarget.value)
    };

    return(
        <>
            <div id='page_produtos'>

                    <section>
                        <div>
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
                        </div>

                        <div>
                            <h2>Categoria</h2>
                            <label htmlFor="nome" className='items'>
                                <input type="radio" name="ordem" id='nome' value="NomeProduto" onChange={(e) => onRadioChangeOrder(e)} defaultChecked />
                                Nome
                            </label>
                            
                            <label htmlFor="valor" className='items'>
                                <input type="radio" name="ordem" id='valor' value="Valor" onChange={(e) => onRadioChangeOrder(e)} />
                                Valor
                            </label>
                        </div>
                    </section>

                    <section>
                        <ListaProdutos categoria={categoriaState} ordem={ordemState} />
                    </section>
                
            </div>
        </>
    );
}

export default Produtos;