import React from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';

function App() {
 
    console.log(`web3 version is: `+ web3.version);
    web3.eth.getAccounts().then(console.log);
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload blamblam blam 2.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React plate
        </a>
      </header>
    </div>
  );
}

export default App;
