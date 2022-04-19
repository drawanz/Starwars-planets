import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextProvider from './ContextProvider';

export default function Provider({ children }) {
  const [data, setData] = useState();

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

  const context = { data };

  return (
    <ContextProvider.Provider value={ context }>
      {children}
    </ContextProvider.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
