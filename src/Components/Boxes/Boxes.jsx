import React, { useState, useEffect } from "react";
import styles from "./boxes.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Boxes() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function play(index) {
    if (board[index] !== null || isThereAWinner()) {
      return;
    }

    const boardCopy = [...board];
    boardCopy[index] = currentPlayer;
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setBoard(boardCopy);
  }

  function checkElements(startingPoints, offset) {
    for (const element of startingPoints) {
      if (
        board[element] !== null &&
        board[element] === board[element + offset] &&
        board[element + offset] === board[element + offset * 2]
      ) {
        return true;
      }
    }

    return false;
  }

  function isThereAWinner() {
    const rowStartingPoints = [0, 3, 6];
    if (checkElements(rowStartingPoints, 1)) {
      return true;
    }

    const columnStartingPoints = [0, 1, 2];
    if (checkElements(columnStartingPoints, 3)) {
      return true;
    }

    const isSecondDiagonalEqual =
      board[2] === board[4] && board[4] === board[6];
    if (board[2] !== null && isSecondDiagonalEqual) {
      return true;
    }
    const isFirstDiagonalEqual = board[0] === board[4] && board[4] === board[8];
    if (board[0] !== null && isFirstDiagonalEqual) {
      return true;
    }

    return false;
  }

  const lastPlayer = currentPlayer === "X" ? "O" : "X";

  return (
    <>
      <div className={cx("title")}>TicTacToe Mania </div>
      {isThereAWinner() && <div>Player {lastPlayer} won</div>}

      <div className={styles.border}>
        <div className={styles.grid}>
          {board.map((cell, index) => (
            <div key={index} className={cx("box")} onClick={() => play(index)}>
              {cell}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
