import './ProdutoSelecionado.css';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Estoque from '../../models/Estoque';
import useLocalStorage from 'react-use-localstorage';
import { useParams, useNavigate } from 'react-router-dom';
import { buscaId } from '../../services/Services';
import { toast } from 'react-toastify';

function ProdutoSelecionado() {

    const carrinho = () => toast.success('Produto adicionado ao carrinho');
    let estoques: Estoque[] = [];
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
    const [cart, setCart] = useLocalStorage('cart');
    const [produtos, setProdutos] = useState<Estoque>({
        id_Produto: 0,
        produto: "",
        descricao: "",
        categoria: "",
        valor: "",
        quantidade: "",
        url_Imagem: ""
    })

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
        if (cart === "") {
            setCart('[]')
        }


    }, [id_Produtos])

    async function findById(id_Produtos: string) {
        buscaId(`api/Produtos/id/${id_Produtos}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    function addToCart() {
        let aux = true;
        alert(produtos.produto)
        estoques = JSON.parse(cart)
        for (let index = 0; index < estoques.length; index++) {
            if (estoques[index].id_Produto === produtos.id_Produto) {
                aux = false
                alert("produto ja esta no carrinho")
            }
        }
        if (aux) {
            estoques.push(produtos)
            console.log(estoques)
            setCart(JSON.stringify(estoques))
        }


    }


    return (
        <>
            <Navbar />
            <div id='container' className='peixinhoOoO'>
                <article className='card1'>
                    <img src={produtos?.url_Imagem} alt={produtos?.produto} id='img-card1' />
                    <div className='separar'>
                        <h4 className='mg-top0'>{produtos?.produto}</h4>
                        <h5 className='mg-top15'>{produtos?.categoria}</h5>
                        <h5 className='mg-top16'>{produtos?.descricao}</h5>

                        
                        <h4 className='mg-top1'>Quantidade: {produtos?.quantidade}</h4>
                        <h2 className='mg-toph21'>R$: {produtos?.valor}</h2>

                        <div id='Dados-do-Peixe' className='detalhe'>
                            <div className="actions">                           
                        
                                <button onClick={addToCart} className="comprarSelect">
                                    <a><ShoppingCartIcon/></a></button>
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