import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextProvider from '../Context/ContextProvider';

export default function Table() {
  const { data, filterByName } = useContext(ContextProvider);
  const { name } = filterByName;
  // const { column, comparison, value } = filterByNumericValues;

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        {data && data.filter((ele) => ele.name.toLowerCase().includes(name)).map(
          (ele) => (
            <tr key={ ele.url }>
              <td>{ele.name}</td>
              <td>{ele.rotation_period}</td>
              <td>{ele.orbital_period}</td>
              <td>{ele.diameter}</td>
              <td>{ele.climate}</td>
              <td>{ele.gravity}</td>
              <td>{ele.terrain}</td>
              <td>{ele.surface_water}</td>
              <td>{ele.population}</td>
              <td>{ele.films}</td>
              <td>{ele.created}</td>
              <td>{ele.edited}</td>
              <td>{ele.url}</td>
            </tr>
          ),
        )}
      </table>
    </div>
  );
}

Table.propTypes = {
  expenses: PropTypes.object,
  deleteExpense: PropTypes.func,
}.isRequired;
