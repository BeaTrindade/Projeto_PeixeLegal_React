import { fontWeight } from "@mui/system";
import { parse } from "querystring";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";
import Footer from "../../components/estaticos/footer/Footer";
import Navbar from "../../components/estaticos/navbar/Navbar";
import Estoque from "../../models/Estoque";
import "./Carrinho.css"

export default function Carrinho(prop: any) {
    let navigate = useNavigate();
    let estoques: Estoque[] = [];

    const [token] = useLocalStorage('token');
    const [cart, setCart] = useLocalStorage('cart');
    const [listaProdutos, setlistaProdutos] = useState<Estoque[]>();
    const [quantity, setQuantity] = useState(1);

    const logado = () => {

        toast.success("Você precisa estar logado");
    }

    useEffect(() => {
        if (token == "") {
            toast.success("Você precisa estar logado")
            navigate("/login")
        }
        if (cart === "") {
            setCart('[]')
        }
        setlistaProdutos(JSON.parse(cart))
    }, [token, setCart])

    function addQuantity() {
        setQuantity(quantity + 1)
    }
    function subQuantity() {
        const newQuantity = quantity - 1;
        (newQuantity > 0) ? setQuantity(newQuantity) : alert("Quantidade não pode ser zero!");
    }

    function deletar(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const button: HTMLButtonElement = e.currentTarget;
        estoques = JSON.parse(cart);
        for (let index = 0; index < estoques.length; index++) {
            if (estoques[index].id_Produto === parseInt(button.value)) {
                estoques.splice(index, 1)
            }
        }
        setCart(JSON.stringify(estoques))
        setlistaProdutos(JSON.parse(cart))
    }
    return (
        <>
            <div id="carrinho_component">
                <div className="carrinhofaixa">Meu carrinho</div>
                <section className="carrinhocorpo" >
                    {listaProdutos?.map(
                        produto => (
                            <>{
                                produto !== null
                                    ?
                                    <article className="carrinhocard" style={{ width: prop.width }}>
                                        <div >
                                            <img src={produto.url_Imagem} alt={produto.produto} className='img-carrinho' style={{ width: "200px", height: "130px" }} />
                                        </div>
                                        <div className="carrinhoinfocard">
                                            <div ><h3>{produto.produto}</h3></div>
                                            <div><h4> R$ {produto.valor}</h4></div>
                                        </div>
                                        <div>
                                            <span className="carrinhobuttom">
                                                <button onClick={addQuantity} className="mais">+</button>
                                                {quantity}
                                                <button onClick={subQuantity} className="menos">-</button>
                                            </span>
                                        </div>
                                        <button onClick={deletar} value={produto.id_Produto} className='imglixo'>
                                            <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1023970113591980083/unknown.png" style={{ width: "25px", height: "25px" }}></img>
                                        </button>
                                        <div>

                                        </div>
                                    </article>
                                    :
                                    ''
                            }
                            </>
                        )
                    )
                    }
                </section>
            </div>
            <article className="carrinhofimbotao">
                <a href="/carrinho" >
                <button  >FINALIZAR</button>
                </a>
            </article>
        </>
    );


}