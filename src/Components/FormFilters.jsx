import React, { useContext } from 'react';
import ContextProvider from '../Context/ContextProvider';

export default function FormFilter() {
  const { filterByName, filterByNumericValues } = useContext(ContextProvider);
  const { name, setName } = filterByName;
  const { column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue } = filterByNumericValues;

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
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
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
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>

        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
    </div>
  );
}
