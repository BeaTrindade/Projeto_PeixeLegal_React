import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const login = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data.token)
}

export const registrar = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
}
