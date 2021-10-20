// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/named
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
// myFunction();
