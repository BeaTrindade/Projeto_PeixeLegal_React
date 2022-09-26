import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './paginas/Cadastro/Cadastro';
import Home from './paginas/home/Home';
import './App.css';
import SobreNos from './paginas/sobrenos/SobreNos';
import Login from './paginas/login/Login';
import Contato from './paginas/contato/Contato';
import Catalogo from '../src/paginas/catalogo/Catalogo';
import ProdutoSelecionado from './paginas/produtoSelecionado/ProdutoSelecionado';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carrinho from './paginas/carrinho/Carrinho';

function App() {
  return (
    <>
      <ToastContainer />
      <div className='App'>

      <Router>   
        <Routes>
        <Route path="Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:categoria" element={<Catalogo />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtoselecionado" element={<ProdutoSelecionado />} />
          <Route path="/produtoselecionado/:id_Produtos" element={<ProdutoSelecionado />}/>
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </Router>
      </div>
  
    </>
  );
}

export default App;
