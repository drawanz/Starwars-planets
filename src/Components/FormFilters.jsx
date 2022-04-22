import React, { useContext } from 'react';
import ContextProvider from '../Context/ContextProvider';

export default function FormFilter() {
  const { data, setData, filterByName,
    filterByNumericValues, options, setOptions } = useContext(ContextProvider);

  const { name, setName } = filterByName;

  const { column, setColumn, comparison, setComparison, value,
    setValue } = filterByNumericValues;

  const handleClick = () => {
    const operador = {
      'maior que': data.filter((ele) => Number(ele[column]) > Number(value)),
      'menor que': data.filter((ele) => Number(ele[column]) < Number(value)),
      'igual a': data.filter((ele) => Number(ele[column]) === Number(value)),
    };
    const newData = operador[comparison];
    setData(newData);
    const newOptions = options.filter((ele) => ele !== column);
    setOptions(newOptions);
    if (setColumn) setColumn(newOptions[0]);
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
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}
