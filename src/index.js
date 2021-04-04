import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';
// import PrimerApp from './PrimerApp';
// import App from './App';
// import CouterApp from './CouterApp/CouterApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CouterApp ></CouterApp> */}
    {/* <PrimerApp saludo="Hola soy, Goku"></PrimerApp> */}
    <GifExpertApp></GifExpertApp>
  </React.StrictMode>,
  document.getElementById('root')
);

