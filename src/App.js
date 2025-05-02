import React, { useState, useEffect } from 'react';
import Cell from './componets/Cell';

const fields = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [counter, setCounter] = useState(0);
  const [newFields, setNewFields] = useState(fields);

  const handleClick = (index) => {
    if (counter == 0 || counter % 2 == 0) {
      const updateFields = [...newFields];
      updateFields[index] = 'X';
      setNewFields(updateFields);
      setCounter(counter + 1);
    }

    if (counter % 2 !== 0) {
      const updateFields = [...newFields];
      updateFields[index] = 'O';
      setNewFields(updateFields);
      setCounter(counter + 1);
    }

    console.log(index);
    console.log(fields[index]);
    console.log(newFields);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe App</h1>

      <div className="container">
        {newFields.map((field, index) => (
          <div className="cell" onClick={() => handleClick(index)}>
            <Cell text={field} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
