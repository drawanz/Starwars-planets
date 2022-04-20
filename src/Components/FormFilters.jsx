import React, { useContext } from 'react';
// import propTypes from 'prop-types';
import ContextProvider from '../Context/ContextProvider';

export default function FormFilter() {
  const { filterByName } = useContext(ContextProvider);
  const { name, setName } = filterByName;

  return (
    <div>
      <label htmlFor="inputFilter">
        Filter by name:
        <input
          id="inputFilter"
          data-testid="name-filter"
          name={ name }
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
    </div>
  );
}
