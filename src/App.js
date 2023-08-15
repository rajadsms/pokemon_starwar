import PokemonList from './pages/pokemonlistpage'
import ListPage from './pages/startwarlistpage'
import './App.scss';
import { useState } from 'react';

function App() {
  const [selection,setSelection]=useState("pokemon")
  const onChangeValue=(evt)=>{
  setSelection(evt.target.value)  
  }
  return (
    <div className="App">
      <div onChange={onChangeValue}>
        <input type="radio" value="pokemon" name="assignment" checked={selection==="pokemon"}/> Pokemon
        <input type="radio" value="starwar" name="assignment" checked={selection!=="pokemon"}/> Starwar
        </div>
    {selection==="pokemon"?<PokemonList/>:<ListPage/>}
    </div>
  );
}

export default App;
