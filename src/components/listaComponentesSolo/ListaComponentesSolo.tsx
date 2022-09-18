import React, { useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import Estoque from '../../models/Estoque';
import { busca } from '../../services/Services';
import { toast } from "react-toastify";
import './ListaComponentesSolo.css'

function ListaProdutosSolo() {
    const [produtos, setProdutos] = useState<Estoque[]>([]);
    const [token, setToken] = useLocalStorage('token');
    const Addcarrinho = () => toast.success('Adicionado ao carrinho com sucesso');

    async function getProdutos() {
        await busca('/api/Produtos', setProdutos, {
            Headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    return (
        <>
            {produtos.map(produto => (

                <article className='card1'>
                    <img src={produto.url_Imagem} alt={produto.produto} id='img-card1' />
                    <div id='divisao'>
                    <h1 className='mg'>{produto.produto}</h1>
                    <h5 className='mg-top1'>{produto.categoria}</h5>
                    <h5 className='mg-top1'>Quantidade: {produto.quantidade}</h5>
                    <h2 className='mg-toph21'>R$: {produto.valor}<span>  </span></h2>
                    <button onClick={Addcarrinho} id='btn-comprar1'>+ Carrinho</button>
                    <button id='btn-comprar1'>Visualizar</button>
                    </div>
                </article>

            ))}
        </>
    );

}

export default ListaProdutosSolo;