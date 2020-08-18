import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(history[stepNumber]);
  const winner = calculateWinner(squares);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    if (winner || squares[i]) return null;
    setSquares(squares.map((square, index) => (index === i ? xO : square)));
    setHistory([...history.slice(0, stepNumber + 1), squares]);
    setXisNext(!xIsNext);
    setStepNumber(stepNumber + 1);
  };

  const jumpTo = (step) => {
    setSquares(history[step + 1]);
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
      <main>
        <ul>
          <li>
            <h3>{winner ? "Winner " + winner : "Next Player: " + xO}</h3>
          </li>
          <li>
            <h3>Move: {stepNumber}</h3>
          </li>
        </ul>
        <Board squares={squares} onClick={handleClick}></Board>
        <div className="info-wrapper">
          <div>
            <h3>History</h3>
            {renderMoves()}
          </div>
        </div>
      </main>
    </>
  );
};

export default Game;
