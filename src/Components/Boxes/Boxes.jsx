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
    checkPlay();
  }, [board]);

  function play(index) {
    if (board[index] !== null) {
      return;
    }

    const boardCopy = [...board];
    boardCopy[index] = "X";
    setBoard(boardCopy);
  }

  function checkPlay() {
    if (board[0] === board[1] && board[1] === board[2]) {
      console.log("three in a row");
    }
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
