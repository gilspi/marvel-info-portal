import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

import MarvelService from './services/MarvelService';


const MarvelService = new MarvelService();

MarvelService.getAllCharacters().then(res => console.log(res));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

