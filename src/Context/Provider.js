import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextProvider from './ContextProvider';

export default function Provider({ children }) {
  const [data, setData] = useState('');
  const [dataFiltered, setDataFiltered] = useState('');
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState(false);
  const [usedFilters, setUsedFilters] = useState([]);
  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  useEffect(() => {
    async function getPlanets() {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      results.forEach((element) => {
        delete element.residents;
      });
      setData(results);
      setDataFiltered(results);
    }
    getPlanets();
  }, []);

  const context = {
    data,
    setData,
    dataFiltered,
    setDataFiltered,
    options,
    setOptions,
    usedFilters,
    setUsedFilters,
    filterByName: {
      name,
      setName,
    },
    filterByNumericValues:
      {
        column,
        setColumn,
        comparison,
        setComparison,
        value,
        setValue,
        filter,
        setFilter,
      },
  };

  return (
    <ContextProvider.Provider value={ context }>
      {children}
    </ContextProvider.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
