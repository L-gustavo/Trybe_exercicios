import React from 'react';
import './App.css';
import pokemons from './data';
import Items from './Items';

function App() {
  return (
  <div className="pokemon">
    <h1> Pokedex </h1>
      <Items pokemons={pokemons}/>
  </div>);
}

export default App;
