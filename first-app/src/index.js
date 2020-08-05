import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* 
import * as calculator from './calc';

// console.log(calculator.add(10,20))

//const add = calculator.add;
const { add } = calculator; */

/* import { add } from './calc';
console.log(add(100,200)); */

//importing default export
import calculator from './calc';
console.log(calculator.add(10000,20000));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
