import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://ar1hvhlellhp.usemoralis.com:2053/server"
      appId="fpkeMKlMkLzTzRGneAdcOMP67wqYs9WknneZzsHm"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
