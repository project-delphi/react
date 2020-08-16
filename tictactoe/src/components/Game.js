import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const squares = history[stepNumber];
    if (winner || squares[i]) return null;
    squares[i] = xO;
    setHistory([...history.slice(0, stepNumber + 1), squares]);
    setXisNext(!xIsNext);
    setStepNumber(stepNumber + 1);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () => {
    return (
      <ul>
        {history.map((_step, move) => {
          const destination = move ? `Go to move #${move}` : `Go to start`;
          return (
            <li key={move}>
              <button
                onClick={() => {
                  jumpTo(move);
                }}
              >
                {destination}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick}></Board>
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner " + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default Game;
