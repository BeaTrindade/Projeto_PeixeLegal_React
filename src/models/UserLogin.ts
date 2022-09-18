interface UserLogin {
  id_usuario?: number| null;
  nome?: string| null;
  log_in?: string| null;
  email?: string| null;
  senha?: string| null;
  portadores?: string| null
  token?: string| null;
}

export default UserLogin;