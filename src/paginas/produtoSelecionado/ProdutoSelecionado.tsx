import './ProdutoSelecionado.css';
import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import Estoque from '../../models/Estoque';
import useLocalStorage from 'react-use-localstorage';
import { useParams, useNavigate } from 'react-router-dom';
import { buscaId } from '../../services/Services';
import { toast } from 'react-toastify';

function ProdutoSelecionado() {

    const carrinho = () => toast.success('Produto adicionado ao carrinho');

    const [quantity, setQuantity] = useState(1);

    function addQuantity() {
        setQuantity(quantity + 1)
    }
    function subQuantity() {
        const newQuantity = quantity - 1;
        (newQuantity > 0) ? setQuantity(newQuantity) : alert("Quantidade não pode ser zero!");
    }

    let navigate = useNavigate();
    const { id_Produtos } = useParams<{ id_Produtos: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [produtos, setProdutos] = useState<Estoque>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id_Produtos !== undefined) {
            findById(id_Produtos)
        }
    }, [id_Produtos])

    async function findById(id_Produtos: string) {
        buscaId(`api/Produtos/id/${id_Produtos}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    return (
        <>
            <Navbar />
            <div id='container' className='peixinhoO'>
                <article className='card1'>
                    <img src={produtos?.url_Imagem} alt={produtos?.produto} id='img-card1' />
                    <div className='separar'>
                        <h4 className='mg-top0'>{produtos?.produto}</h4>
                        <h5 className='mg-top15'>{produtos?.categoria}</h5>
                        <h5 className='mg-top16'>{produtos?.descricao}</h5>

                        <div className="quantidade">
                        <span className="selecionarQuantidade">
                            <button onClick={subQuantity} className="minus">-</button>
                            {quantity}
                            <button onClick={addQuantity} className="plus">+</button>
                        </span>

                    </div>
                        <h4 className='mg-top1'>Quantidade: {produtos?.quantidade}</h4>
                        <h2 className='mg-toph21'>R$: {produtos?.valor}</h2>

                        <div id='Dados-do-Peixe' className='detalhe'>
                    <div className="actions">
                        <button onClick={carrinho} className="cart"><MdAddShoppingCart /></button>
                    </div>
                </div>
                    </div>
                </article>
            </div>

            <Footer />
        </>
    )
}

export default ProdutoSelecionado;