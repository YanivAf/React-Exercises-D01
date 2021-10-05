import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './exercises/1_HelloWorld';
import WithProps from './exercises/2_WithProps';
import ConditionalRendering from './exercises/3_ConditionalRendering';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <HelloWorld />
    <WithProps name="Itsik" />
    <WithProps name="Shlomo" />
    <WithProps name="" />
    <WithProps />
    <WithProps name={null} />
    <WithProps name={undefined} />
    <ConditionalRendering number={7} />
    <ConditionalRendering number={70}/>
    <ConditionalRendering number={10}/>
    <ConditionalRendering number={null}/>
    <ConditionalRendering number={undefined}/>
    <ConditionalRendering number="NaN" />
    <ConditionalRendering />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
