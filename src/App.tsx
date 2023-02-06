import React, { useState } from 'react';
// import logo from './logo.svg';
import './styles/App.css';

import TableInputs from './components/TableInputs';
import TableEquation from './components/TableEquation';
import Table from './components/Table';


export interface Inputs {
  p: number, a: number, b: number
}

const emptyInputs: Inputs = {
  p: 7,
  a: 0,
  b: 2
}

function App() {
  const [inputs, setInputs] = useState(emptyInputs)
  // don't want to change state beneath where state is kept
  function handleChangeP(event: React.ChangeEvent<HTMLInputElement>) {
    // call setInputs with new state
    setInputs({ ...inputs, p: event.target.valueAsNumber })
    // react change events parameterized for HTMLChangeInptu

    // setInputs({ ...inputs, p: event.target.value })
  }
  function handleChangeA(event: React.ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, a: parseInt(event.target.value) })
    // setInputs({ ...inputs, a: event.target.value })
  }
  function handleChangeB(event: React.ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, b: parseInt(event.target.value) })
    // setInputs({ ...inputs, b: event.target.value })
  }
  return (
    <div className="App">
      <TableInputs
        // pass them proppppps
        inputs={inputs}
        handleChangeP={handleChangeP}
        handleChangeA={handleChangeA}
        handleChangeB={handleChangeB}
      />
      <TableEquation inputs={inputs}      // lets GO
      
      />
      <Table inputs={inputs}/>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
