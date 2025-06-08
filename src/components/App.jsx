import { useState } from 'react';
import '../styles/App.scss';
import data from '../data/pokemons.json';
import List from './pokemons/List';

function App() {
  //VARIABLE DE ESTADO
  const [pokemons, setPokemons] = useState(data);
  const [filterName, setFilterName] = useState('');

  //EVENTO
  const handleInputName = (ev) => {
    setFilterName(ev.target.value);
  }

  const filteredPokemons =  pokemons.filter((eachPokemons) => 
    eachPokemons.nombre.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()));

  return (
    <div className='page'>
      <header>
        <h1>POKEADALAB</h1>
      </header>
      <main>
          <form onSubmit={ev=>ev.preventDefault()}>
            <input
              onInput={handleInputName}
              type="text"
              value={filterName}
              name='filterName' 
              id='filterName' 
              placeholder='Filtra por nombre'
            />
          </form>
          <List pokemons={filteredPokemons} />
      </main>
    </div>
  );
}

export default App;
