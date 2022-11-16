import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Session from './components/Session';
import CreateSession from './components/CreateSession';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Sidebar/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {React.version}
        </a>
      </header>
      <CreateSession/>
      <Session />
      <Footer/>
    </div>
  );
}

export default App;
