import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();

window.addEventListener('load', () => {
    registerSW();
  });

  async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./serviceWorker.js');
      } catch (e) {
        console.log(`SW registration failed`);
      }
    }
  }
