import React from 'react';
import { ConnectedRouter } from 'connected-react-router'

import { Nav , Rout } from './Component'
import logo from './logo.svg';
import './App.css';

const App= ({history, context})=>{
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo image-responsive" alt="logo" />
      </header>
      <ConnectedRouter history={history} context={context}>
        <Nav />
        <Rout />
      </ConnectedRouter>
    </div>
  );
}

export default App;
