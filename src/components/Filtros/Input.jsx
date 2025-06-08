function Input({ filterName, handleInputName, filterTipo, handleInputTipo, filterGen, handleInputGen }) {
    return (
        <div className='filtros'>
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
          <select onInput={handleInputTipo} value={filterTipo} name="tipo" id="tipo">
            <option value="">Tipo</option>
            <option value="Planta">Planta</option>
            <option value="Fuego">Fuego</option>
            <option value="Agua">Agua</option>
            <option value="Veneno">Veneno</option>
            <option value="Volador">Volador</option>
            <option value="Bicho">Bicho</option>
            <option value="Normal">Normal</option>
            <option value="Electrico">Eléctrico</option>
            <option value="Tierra">Tierra</option>
            <option value="Hada">Hada</option>
            <option value="Acero">Acero</option>
          </select>
          <select onInput={handleInputGen} value={filterGen} name="tipo" id="tipo">
            <option value="">Generación</option>
            <option value="1">Generación 1</option>
            <option value="7">Generación 7</option>
            <option value="9">Generación 9</option>
          </select>
        </div>
    );
}

export default Input;