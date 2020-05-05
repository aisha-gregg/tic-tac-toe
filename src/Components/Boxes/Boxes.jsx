import React, { useState, useEffect } from "react";
import styles from "./boxes.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Boxes() {
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

  useEffect(() => {
    if (isThereAWinner()) {
      console.log("Winner");
    }
  }, [board]);

  function play(index) {
    if (board[index] !== null || isThereAWinner()) {
      return;
    }

    const boardCopy = [...board];
    boardCopy[index] = "X";
    setBoard(boardCopy);
  }

  function isThereAWinner() {
    const rowStartingPoints = [0, 3, 6];

    for (const row of rowStartingPoints) {
      if (
        board[row] !== null &&
        board[row] === board[row + 1] &&
        board[row + 1] === board[row + 2]
      ) {
        return true;
      }
    }

    const firstColumnIsEqual = board[0] === board[3] && board[3] === board[6];
    if (board[0] !== null && firstColumnIsEqual) {
      return true;
    }
    const isSecondColumnEqual = board[1] === board[4] && board[4] === board[7];
    if (board[1] !== null && isSecondColumnEqual) {
      return true;
    }
    const isThirdColumnEqual = board[2] === board[5] && board[5] === board[8];
    if (board[2] !== null && isThirdColumnEqual) {
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

  return (
    <>
      <div className={cx("title")}>TicTacToe Mania </div>

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
