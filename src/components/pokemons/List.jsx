import Item from "./Item";

function List({pokemons}) {
    return (
        <ul>
          {pokemons.map((eachPokemons) => (
            <li key={eachPokemons.id}>
                <Item eachPokemons={eachPokemons} />
            </li>
          ))}
        </ul>
    );
}

export default List;