import { useState } from 'react';
import '../styles/App.scss';
import data from '../data/pokemons.json';
import List from './pokemons/List';

function App() {
  //VARIABLE DE ESTADO
  const [pokemons, setPokemons] = useState(data);

  return (
    <div className='page'>
      <header>
        <h1>POKEADALAB</h1>
      </header>
      <main>
          <form action="">
            <input type="text" name='filterName' id='filterName' placeholder='Filtra por nombre'/>
          </form>
          <List pokemons={pokemons} />
      </main>
    </div>
  );
}

export default App;
