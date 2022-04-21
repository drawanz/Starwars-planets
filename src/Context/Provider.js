import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextProvider from './ContextProvider';

export default function Provider({ children }) {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    async function getPlanets() {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      results.forEach((element) => {
        delete element.residents;
      });
      setData(results);
    }
    getPlanets();
  }, []);

  const context = {
    data,
    setData,
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
