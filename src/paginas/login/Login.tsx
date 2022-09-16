import React, { useState, useEffect, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import './Login.css'
import Autenticar from '../../models/autenticar/Autenticar';
import { api, login } from '../../services/Services';
import { useNavigate, } from 'react-router-dom';
import { toast } from 'react-toastify'
import useLocalStorage from 'react-use-localstorage';
import { TextField, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Login() {
    let navigate = useNavigate();
    
    const [token, setToken] = useLocalStorage('token');

    const [UserLogin, setUser] = useState<Autenticar>(
        {
            email: '',
            senha: ''
        }
    )
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...UserLogin,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`api/Usuarios/logar`, UserLogin, setToken)

            alert('Entrada estabelecida com sucesso!')
        } catch (error) {
            alert('Erro! Verifique o E-mail e/ou Senha e tente outra vez!')
        }
    }
    useEffect(() => {
        if (token !== '') {
            navigate('/Home');
        }
    }, [token, navigate]);

    return (
        <main id='container_login'>
            <section id='user_login'>

                <article className='header'>
                    <Box>
                    <a href="/Home"> 
                    <ArrowBackIcon className='seta' sx={{ fontSize: 40 }} />
                    </a>                    
                    </Box>                    
                    <label>Entrar</label>
                </article>

                <form onSubmit={onSubmit}>

                    <TextField value={UserLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                    <TextField value={UserLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                    <Button className='corzinhaa' type='submit' variant='contained' style={{ fontWeight: 'bold' }}>
                        Logar
                    </Button>

                </form>

                <article className='footer'>
                    <Typography variant='subtitle1'>
                        Ainda não tem cadastro?
                    </Typography>
                    <Button className='loq' href='/Cadastro' variant="text" style={{ fontWeight: 'bold' }}>Cadastre-se já</Button>

                </article>
            </section>

        </main>

    );


}

export default Login;