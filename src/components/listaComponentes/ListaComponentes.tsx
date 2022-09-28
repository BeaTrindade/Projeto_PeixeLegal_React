import React, { ChangeEvent, useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Estoque from '../../models/Estoque';
import { api, busca, buscaId } from '../../services/Services';
import { toast } from "react-toastify";
import './ListaComponentes.css'
import { Link, useParams } from 'react-router-dom';

function ListaProdutos(props: any) {
    const [produtos, setProdutos] = useState<Estoque[]>([]);
    const [token] = useLocalStorage('token');
    let estoques: Estoque[] = [];
    const [cart, setCart] = useLocalStorage('cart');

    useEffect(() => {

        getProdutos()
    }, [produtos.length, cart])

    async function getProdutos() {
        await busca('/api/Produtos', setProdutos, {
            Headers: {
                'Authorization': token
            }
        })
    }

    function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const button: HTMLButtonElement = e.currentTarget;

        api.get(`api/Produtos/id/${button.value}`, {
            headers: {
                'Authorization': token
            }
        }).then(response => {
          let aux = true;
          estoques = JSON.parse(cart)
          for (let index = 0; index < estoques.length; index++) {
              if (estoques[index].id_Produto === parseInt(button.value)) {
                  aux = false
                  toast.warning("Produto ja esta no carrinho");
              }
          }
          if (aux) {
              estoques.push(response.data)
              setCart(JSON.stringify(estoques))
              toast.success("Adicionado ao carrinho");
          }

        }).catch(error => {
            console.log(error)
        })
    }

    if (props.categoria == 'TODOS') {
        return (
            <>
                {produtos.map(produto => (

                    <article className='card'>
                        <img src={produto.url_Imagem} alt={produto.produto} id='img-card' />
                        <h2>{produto.produto}</h2>
                        <h5 className='mg-top'>{produto.categoria}</h5>
                        <h4 className='mg-top'>Quantidade: {produto.quantidade} </h4>
                        <h2 className='mg-toph2'>R$: {produto.valor}</h2>
                        <a href={`/produtoselecionado/${produto.id_Produto}`} id='btn-visualizar'>Visualizar</a>
                        <button onClick={(e)=> addToCart(e)} value={produto.id_Produto} id='btn-comprar'><ShoppingCartIcon/></button>
                    </article>

                ))}

            </>
        );
    } else {
        return (
            <>
                {
                    produtos.map(produto => (

                        produto.categoria == props.categoria
                            ?
                            <article className='card'>
                                <img src={produto.url_Imagem} alt={produto.produto} id='img-card' />
                                <h2>{produto.produto}</h2>
                                <h5 className='mg-top'>{produto.categoria}</h5>
                                <h4 className='mg-top'>Quantidade: {produto.quantidade} </h4>
                                <h2 className='mg-toph2'>R$: {produto.valor}</h2>
                                <a href={`/produtoselecionado/${produto.id_Produto}`} id='btn-comprar'>Visualizar</a>
                                <button onClick={(e)=> addToCart(e)} value={produto.id_Produto} id='btn-comprar'><ShoppingCartIcon/></button>
                            </article>
                            :
                            ''
                    ))
                }
            </>
        );
    }
}

export default ListaProdutos;