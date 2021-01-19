import React from 'react';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import Head from "./components/Head";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Head />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
