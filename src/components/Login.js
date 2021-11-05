/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';
import { loginEmailPass } from '../lib/sesion.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'welcomLogin';
  loginDiv.textContent = 'Bienvenido al inicio de sesión';

  const inputCorreo = document.createElement('input');
  inputCorreo.setAttribute('placeholder', 'corero electronico');
  inputCorreo.className = 'inputCorreo';

  const inputContraseña = document.createElement('input');
  inputContraseña.setAttribute('placeholder', 'constraseña');
  inputContraseña.className = 'inputContraseña';

  const btnIniciarLogin = document.createElement('button');
  btnIniciarLogin.textContent = 'Iniciar Sesión';
  btnIniciarLogin.className = 'btnIniciarLogin';

  const buttonHomeLogin = document.createElement('button');
  buttonHomeLogin.className = 'btnHomeLogin';
  buttonHomeLogin.textContent = 'Regresar al Home';

  btnIniciarLogin.addEventListener('click', () => loginEmailPass(inputCorreo.value, inputContraseña.value));
  // buttonHomeLogin.addEventListener('click', () => onNavigate('/'));

  loginDiv.append(inputCorreo, inputContraseña, btnIniciarLogin, buttonHomeLogin);

  return loginDiv;
};
