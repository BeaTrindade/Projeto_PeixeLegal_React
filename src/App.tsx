import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './paginas/Cadastro/Cadastro';
import Home from './paginas/home/Home';
import './App.css';
import SobreNos from './paginas/sobrenos/SobreNos';
import Login from './paginas/login/Login';
import Catalogo from './paginas/catalogo/Catalogo';
import Contato from './paginas/contato/Contato';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
      </div>
  
    </>
  );
}

export default App;
