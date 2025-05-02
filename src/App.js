import React, { useState } from 'react';
import Cell from './componets/Cell';

const fields = ['', '', '', '', '', 'X', '', '', 'X'];

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Tic Tac Toe App</h1>

      <div className="container">
        {fields.map((field, index) => (
          <div>
            <Cell text={fields[index]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
