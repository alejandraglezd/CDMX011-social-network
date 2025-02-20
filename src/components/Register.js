/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { signUp } from '../lib/auth.js';
import { onNavigate } from '../main.js';

export const Register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'registerDiv';

  const greetingDivR = document.createElement('div');
  greetingDivR.classList = 'greetingDivR';
  greetingDivR.textContent = '¿Aún no tienes una cuenta? ¡Regístrate!';

  const formContainerR = document.createElement('section');
  formContainerR.className = 'formContainerR';

  const mainLogoR = document.createElement('div');
  mainLogoR.className = 'mainLogoR';
  mainLogoR.textContent = 'ciclovida';

  const logoDivR = document.createElement('div');
  logoDivR.className = 'logoDivR';
  logoDivR.textContent = 'ciclovida';

  const buttonHome = document.createElement('button');
  buttonHome.className = 'buttonBackHomeR';
  buttonHome.textContent = 'Regresar a Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  const inputMail = document.createElement('input');
  inputMail.className = 'inputMailR';
  inputMail.setAttribute('placeholder', 'Correo electrónico');

  const inputPass = document.createElement('input');
  inputPass.setAttribute('placeholder', 'Contraseña');
  inputPass.className = 'inputPassR';

  const btnSubmit = document.createElement('button');
  btnSubmit.className = 'btnSubmitR';
  btnSubmit.textContent = 'Registrarse';

  btnSubmit.addEventListener('click', () => signUp(inputMail.value, inputPass.value));

  registerDiv.append(formContainerR, mainLogoR, logoDivR, greetingDivR, buttonHome, inputMail, inputPass, btnSubmit);

  return registerDiv;
};
