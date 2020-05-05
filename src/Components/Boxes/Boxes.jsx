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
    const firstRowIsEqual = board[0] === board[1] && board[1] === board[2];
    if (board[0] !== null && firstRowIsEqual) {
      return true;
    }
    const secondRowIsEqual = board[3] === board[4] && board[4] === board[5];
    if (board[3] !== null && secondRowIsEqual) {
      return true;
    }
    const isThirdRowEqual = board[6] === board[7] && board[7] === board[8];
    if (board[6] !== null && isThirdRowEqual) {
      return true;
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
