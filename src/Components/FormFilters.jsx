import React, { useContext } from 'react';
import ContextProvider from '../Context/ContextProvider';

export default function FormFilter() {
  const { usedFilters, setUsedFilters,
    filterByName, filterByNumericValues, options, setOptions,
  } = useContext(ContextProvider);

  const { name, setName } = filterByName;

  const { column, setColumn, comparison, setComparison, value,
    setValue } = filterByNumericValues;

  const handleClick = () => {
    const obj = { column, comparison, value };
    const newFilters = [...usedFilters, obj];
    setUsedFilters(newFilters);
  };

  const handleOptions = () => {
    console.log(options);
    const newOptions = options.filter((ele) => ele !== column);
    setOptions(newOptions);
    if (column) setColumn(newOptions[0]);
  };

  const handleButtonX = (indexParam) => {
    const itemToRemove = usedFilters[indexParam].column;
    const newFilters = [...usedFilters];
    newFilters.splice(indexParam, 1);
    setUsedFilters(newFilters);
    const newOptions = [...options, itemToRemove];
    setOptions(newOptions);
    setColumn(newOptions[0]);
  };

  return (
    <div>
      <form>
        <label htmlFor="input-filter">
          Filter by name:
          <input
            id="input-filter"
            data-testid="name-filter"
            name={ name }
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
      </form>

      <form>
        <label htmlFor="column-filter">
          Coluna:
          <select
            id="column-filter"
            data-testid="column-filter"
            name={ column }
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {options.map((ele) => <option key={ ele }>{ ele }</option>)}
          </select>
        </label>

        <label htmlFor="comparison-filter">
          Operador:
          <select
            id="comparison-filter"
            data-testid="comparison-filter"
            name={ comparison }
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <label htmlFor="value-filter">
          <input
            id="value-filter"
            data-testid="value-filter"
            name={ value }
            value={ value }
            type="number"
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            if (options.length > 0) {
              handleClick();
              handleOptions();
            }
          } }
        >
          Filtrar
        </button>
        {usedFilters && usedFilters.map((e, index) => (
          <div key={ index } data-testid="filter">
            <span>{`${e.column} ${e.comparison} ${e.value}`}</span>
            <button
              type="button"
              onClick={ () => {
                handleButtonX(index);
              } }
            >
              X
            </button>
          </div>
        ))}
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => {
            setOptions(['population', 'orbital_period', 'diameter',
              'rotation_period', 'surface_water']);
            setUsedFilters([]);
          } }
        >
          Remover todas filtragens
        </button>
      </form>
    </div>
  );
}
