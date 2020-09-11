import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './sass/demo.scss';
import SlideShowBasic from './components/SlideShowBasic';
import SlideShow from './components/SlideShow';
import Welcome from './components/basicState';

const name = 'Andrew';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <SlideShowBasic/>
      <br/>
      <br/>
      <br/>
      <SlideShow/>
      <br/>
      <br/>
      <br/>
      <Welcome
        name={name}
      />
    </div>
  );
}

export default App;
