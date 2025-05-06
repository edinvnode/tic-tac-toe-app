import React, { useState } from 'react';
import Cell from './componets/Cell';

const fields = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [counter, setCounter] = useState(0);
  const [newFields, setNewFields] = useState(fields);
  const [result, setResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleClick = (index) => {
    if (counter === 0 || counter % 2 === 0) {
      const updateFields = [...newFields];
      if (updateFields[index] === '') {
        updateFields[index] = 'X';
        setNewFields(updateFields);
        setCounter(counter + 1);
      }

      //check if there are 3 in a row or a column or diagonally

      if (
        updateFields[0] === 'X' &&
        updateFields[1] === 'X' &&
        updateFields[2] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }

      if (
        updateFields[3] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[5] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }

      if (
        updateFields[6] === 'X' &&
        updateFields[7] === 'X' &&
        updateFields[8] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }

      if (
        updateFields[0] === 'X' &&
        updateFields[3] === 'X' &&
        updateFields[6] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }

      if (
        updateFields[1] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[7] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }

      if (
        updateFields[2] === 'X' &&
        updateFields[5] === 'X' &&
        updateFields[8] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }

      if (
        updateFields[0] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[8] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }

      if (
        updateFields[2] === 'X' &&
        updateFields[4] === 'X' &&
        updateFields[6] === 'X'
      ) {
        setResult(true);
        setResultMessage('Player X has won');
        setCounter(0);
      }
    }

    if (counter % 2 !== 0) {
      const updateFields = [...newFields];
      if (updateFields[index] === '') {
        updateFields[index] = 'O';
        setNewFields(updateFields);
        setCounter(counter + 1);
      }
      //check if there are 3 in a row or a column or diagonally

      if (
        updateFields[0] === 'O' &&
        updateFields[1] === 'O' &&
        updateFields[2] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }

      if (
        updateFields[3] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[5] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }

      if (
        updateFields[6] === 'O' &&
        updateFields[7] === 'O' &&
        updateFields[8] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }

      if (
        updateFields[0] === 'O' &&
        updateFields[3] === 'O' &&
        updateFields[6] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }

      if (
        updateFields[1] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[7] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }

      if (
        updateFields[2] === 'O' &&
        updateFields[5] === 'O' &&
        updateFields[8] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }

      if (
        updateFields[0] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[8] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }

      if (
        updateFields[2] === 'O' &&
        updateFields[4] === 'O' &&
        updateFields[6] === 'O'
      ) {
        setResult(true);
        setResultMessage('Player O has won');
        setCounter(0);
      }
    }

    //console.log(index);
    //console.log(fields[index]);
    //console.log(newFields);

    if (counter > 7) {
      setResult(true);
      setResultMessage("It's a tie.");
      setCounter(0);
      return;
    }
  };

  const handleRestart = () => {
    const updateFields = ['', '', '', '', '', '', '', '', ''];
    setNewFields(updateFields);
    setResult(false);
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe App</h1>

      <div className="container">
        {newFields.map((field, index) => (
          <div
            className="cell"
            onClick={!result ? () => handleClick(index) : undefined}
            key={index}
            style={{ backgroundColor: field !== '' ? 'yellow' : 'white' }}
          >
            <Cell text={field} />
          </div>
        ))}
      </div>
      {result && (
        <div className="result">
          <span>Game Over {resultMessage}</span>
          <button className="restart-button" onClick={handleRestart}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
