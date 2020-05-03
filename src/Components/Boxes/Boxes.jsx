import React, { useState } from "react";
import styles from "./boxes.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export function Boxes() {
  const [board, setBoard] = useState([
    "X",
    "O",
    "X",
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  return (
    <>
      <div className={cx("title")}>TicTacToe Mania </div>

      <div className={styles.border}>
        <div className={styles.grid}>
          {board.map((cell) => (
            <div className={cx("box")}>{cell} </div>
          ))}
        </div>
      </div>
    </>
  );
}
