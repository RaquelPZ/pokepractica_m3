import { useState } from 'react';
import '../styles/App.scss';
import data from '../data/pokemons.json';
import List from './pokemons/List';
import Input from './Filtros/Input';

function App() {
  //VARIABLE DE ESTADO
  const [pokemons, setPokemons] = useState(data);
  const [filterName, setFilterName] = useState('');
  const [filterTipo, setFilterTipo] = useState('');
  const [filterGen, setFilterGen] = useState('');

  //EVENTO
  const handleInputName = (ev) => {
    setFilterName(ev.target.value);
  }
  const handleInputTipo = (ev) => {
    setFilterTipo(ev.target.value);
  }
  const handleInputGen = (ev) => {
    setFilterGen(ev.target.value);
  }

  //FUNCION
  const filteredPokemons =  pokemons
    .filter((eachPokemons) =>
      eachPokemons.nombre
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase())
    )
    .filter(eachPokemons => 
      filterTipo === '' || 
      eachPokemons.tipo.includes(filterTipo) ||
      eachPokemons.tipo2?.includes(filterTipo)   
    )
    .filter(eachPokemons => 
      filterGen === '' || 
      eachPokemons.generacion === Number(filterGen)
    );

  return (
    <div className='page'>
      <header>
        <h1>POKEADALAB</h1>
      </header>
      <main>
        <Input
          filterName={filterName}
          handleInputName={handleInputName}
          filterTipo={filterTipo}
          handleInputTipo={handleInputTipo}
          filterGen={filterGen}
          handleInputGen={handleInputGen}
        />

        <List pokemons={filteredPokemons} />
      </main>
    </div>
  );
}

export default App;
