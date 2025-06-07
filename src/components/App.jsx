import { useState } from 'react';
import '../styles/App.scss';
import data from '../data/pokemons.json';

function App() {
  //VARIABLE DE ESTADO
  const [pokemons, setPokemons] = useState(data);

  return (
    <div className='page'>
      <header>
        <h1>POKEADALAB</h1>
      </header>
      <main>
        <ul>
          {pokemons.map((eachPokemons) => (
            <li key={eachPokemons.id}>
              <h3> {eachPokemons.nombre} </h3>
              <img src={eachPokemons.imagen} alt="foto del pokemon" />
              <p> {eachPokemons.tipo} </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
