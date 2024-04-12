import './App.css';
import React from 'react';
import Persons from './components/persons/persons';
import RandomUser from './components/RandomUser/RandomUser';

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo 1 </h1>
      <Persons/>
      <RandomUser/>
    </div>
  );
}

export default App;
