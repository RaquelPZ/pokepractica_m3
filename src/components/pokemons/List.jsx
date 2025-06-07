function List({pokemons}) {
    return (
        <ul>
          {pokemons.map((eachPokemons) => (
            <li key={eachPokemons.id}>
              <h3> {eachPokemons.nombre} </h3>
              <img src={eachPokemons.imagen} alt="foto del pokemon" />
              <p> {eachPokemons.tipo} </p>
            </li>
          ))}
        </ul>
    );
}

export default List;