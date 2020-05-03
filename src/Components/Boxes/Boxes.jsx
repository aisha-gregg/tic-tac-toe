import React, { useState } from "react";
import styles from "./boxes.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Boxes() {
  const [board, setBoard] = useState([
    "X",
    "O",
    null,
    null,
    "X",
    null,
    null,
    null,
    "X",
  ]);

  function play(index) {
    const boardCopy = [...board];
    boardCopy[index] = "X";
    setBoard(boardCopy);
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
