import React from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
