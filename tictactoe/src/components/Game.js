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
    if (winner || squares[i]) return;
    squares[i] = x0;
    setStepNumber(stepNumber + 1);
    setHistory([history.slice(0, stepNumber), squares]);
    setXisNext(!xIsNext);
  };
  const jumpTo = (move) => {};
  const renderMoves = () => {};
  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick}></Board>
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner " + winner : "Next Player: " + xo}</h3>
      </div>
    </>
  );
};

export default Game;
