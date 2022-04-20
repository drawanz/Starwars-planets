import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Table from './Components/Table';
import FormFilter from './Components/FormFilters';

function App() {
  return (
    // Observação: Para evitar erros no avaliador, na preparação do seu ambiente de trabalho para o uso do Context API, é necessário que o <Provider> seja usado dentro do componente App.js e não no arquivo index.js. Esta orientação tem finalidade exclusiva para os testes deste projeto.
    <Provider>
      <span>Hello, App!</span>
      <Table />
      <FormFilter />
    </Provider>
  );
}

export default App;
