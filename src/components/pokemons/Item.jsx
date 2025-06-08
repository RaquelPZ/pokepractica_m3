function Item({eachPokemons}) {
    return (
        <>
        <h3> {eachPokemons.nombre} </h3>
              <img src={eachPokemons.imagen} alt="foto del pokemon" />
              <p> {eachPokemons.tipo} - {eachPokemons.tipo2} </p>
        </>
    );
}

export default Item;