import React, { ChangeEvent, useEffect, useState } from "react";
import UserLogin from '../../models/UserLogin';
import { api, registrar } from '../../services/Services';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from "react-toastify";
import './Cadastro.css';

function Cadastros() {
    let navigate = useNavigate();

    const [confirmesenha, setconfirmesenha] = useState<String>("")
    const [UserLogin, setUser] = useState<UserLogin>(
        {
            id_usuario: 0,
            nome: '',
            log_in: '',
            email: '',
            senha: '',
            portadores: 'IndividualPerson'
        }
    );
    const [userResult, setUserResult] = useState<UserLogin>(
        {
            id_usuario: 1,
            nome: '',
            log_in: '',
            email: '',
            senha: '',
            portadores: ''
        }
    );
    useEffect(() => {
        if (userResult.id_usuario != 1) {
            navigate('/login');
        }
    }, [userResult, navigate]);
    function cornfirmarsenhavai(e: ChangeEvent<HTMLInputElement>) {
        setconfirmesenha(e.target.value)
    }
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...UserLogin,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmesenha === UserLogin.senha) {
            registrar(`/api/Usuarios`, UserLogin, setUserResult)
            alert('Você agora tem uma conta no Peixe Legal!')

        } else {
            alert("Dados inconsistentes. Favor verificar as informações de cadastro.")
        }
    }
    return (
        <main id='container_cadastro'>
            <section id='user_cadastro'>
                <article className='header'>
                    <Box>
                        <a href="/Login">
                            <ArrowBackIcon className='seta' sx={{ fontSize: 40 }} />
                        </a>
                    </Box>
                    <label>Cadastro</label>
                </article>
                <form onSubmit={onSubmit} >
                    <TextField value={UserLogin.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField value={UserLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                    <TextField value={UserLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField value={confirmesenha} onChange={(e: ChangeEvent<HTMLInputElement>) => cornfirmarsenhavai(e)} id='confirmesenha' label='Confrimar a senha' variant='outlined' name='confirmesenha' margin='normal' type='password' fullWidth />

                    <Button className='corzinhaa' type='submit' variant='contained' style={{ fontWeight: 'bold' }}>
                        Cadastrar
                    </Button>
                </form>
            </section>
        </main>
    );
}
export default Cadastros;

