import React, { useEffect, useState } from 'react';
import Estoque from '../../models/estoque/Estoque';
import { busca } from '../../services/Services';

function ListaProdutos(prop: any) {
    const [produtos, setProdutos] = useState<Estoque[]>([]);

    async function getProdutos() {
        await busca('/api/Estoque/', setProdutos, {
            params: {
                produtosLista: produtos,
                categoria: prop.categoria,
                ordem: prop.ordem,
            }
        })
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    console.log(prop.categoria);
    console.log(prop.ordem);

    return (
        <>
            {produtos.map(produto => (

                produto.categoria === prop.categoria
                    ?
                    <article className='card'>
                        <img src={produto.url_Imagem} alt={produto.produto} id='img-card' />
                        <img src='https://cdn.discordapp.com/attachments/1001812118422695987/1019724932269228042/logo_PLegal.png' alt='Logo-Peixe-Legal' id='logo-card' />
                        <h1>{produto.produto}</h1>
                        <h5 className='mg-top'>{produto.categoria}</h5>
                        <h5 className='mg-top'>Quantidade: {produto.quantidade} Kg</h5>
                        <h2 className='mg-toph2'>R$: {produto.valor}<span>  Kg</span></h2>
                        <button id='btn-comprar'>Comprar</button>
                    </article>
                    :
                    ''

            ))}
        </>
    );
}

export default ListaProdutos;