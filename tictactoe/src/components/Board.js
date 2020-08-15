import React from "react";

const Board = ({ squares, onClick }) => {
  <div className="board">
    {squares.map((square, i) => {
      <Square key={i} value="square" onClick={() => onClick(i)}></Square>;
    })}
  </div>;
};

export default Board;
