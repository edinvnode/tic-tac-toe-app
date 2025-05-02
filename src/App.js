import React, { useState, useEffect } from 'react';
import Cell from './componets/Cell';

const fields = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [counter, setCounter] = useState(0);
  const [newFields, setNewFields] = useState(fields);
  const [result, setResult] = useState(false);

  const handleClick = (index) => {
    if (counter > 9) {
      setResult(true);
      return;
    }
    if (counter === 0 || counter % 2 === 0) {
      const updateFields = [...newFields];
      if (updateFields[index] === '') updateFields[index] = 'X';
      setNewFields(updateFields);
      setCounter(counter + 1);

      //check if there are 3 in a row or a column or diagonally

      if (
        updateFields[0] === 'X' &&
        updateFields[1] === 'X' &&
        updateFields[2] === 'X'
      ) {
        alert('X won');
      }

      if (
        updateFields[3] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[5] === 'X'
      ) {
        alert('X won');
      }

      if (
        updateFields[6] === 'X' &&
        updateFields[7] === 'X' &&
        updateFields[8] === 'X'
      ) {
        alert('X won');
      }

      if (
        updateFields[0] === 'X' &&
        updateFields[3] === 'X' &&
        updateFields[6] === 'X'
      ) {
        alert('X won');
      }

      if (
        updateFields[1] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[7] === 'X'
      ) {
        alert('X won');
      }

      if (
        updateFields[2] === 'X' &&
        updateFields[5] === 'X' &&
        updateFields[8] === 'X'
      ) {
        alert('X won');
      }

      if (
        updateFields[0] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[8] === 'X'
      ) {
        alert('X won');
      }

      if (
        updateFields[2] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[6] === 'X'
      ) {
        alert('X won');
      }
    }

    if (counter % 2 !== 0) {
      const updateFields = [...newFields];
      if (updateFields[index] === '') updateFields[index] = 'O';
      setNewFields(updateFields);
      setCounter(counter + 1);

      //check if there are 3 in a row or a column or diagonally

      if (
        updateFields[0] === 'O' &&
        updateFields[1] === 'O' &&
        updateFields[2] === 'O'
      ) {
        alert('O won');
      }

      if (
        updateFields[3] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[5] === 'O'
      ) {
        alert('O won');
      }

      if (
        updateFields[6] === 'O' &&
        updateFields[7] === 'O' &&
        updateFields[8] === 'O'
      ) {
        alert('O won');
      }

      if (
        updateFields[0] === 'O' &&
        updateFields[3] === 'O' &&
        updateFields[6] === 'O'
      ) {
        alert('O won');
      }

      if (
        updateFields[1] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[7] === 'O'
      ) {
        alert('O won');
      }

      if (
        updateFields[2] === 'O' &&
        updateFields[5] === 'O' &&
        updateFields[8] === 'O'
      ) {
        alert('O won');
      }

      if (
        updateFields[0] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[8] === 'O'
      ) {
        alert('O won');
      }

      if (
        updateFields[2] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[6] === 'O'
      ) {
        alert('O won');
      }
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
      {setResult && <div className="result">Game Over</div>}
    </div>
  );
}

export default App;
