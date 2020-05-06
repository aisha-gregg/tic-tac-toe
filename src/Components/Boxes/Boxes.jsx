import React, { useState } from "react";
import styles from "./boxes.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Boxes() {
  const initialBoard = [null, null, null, null, null, null, null, null, null];
  const initialPlayer = "X";
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const [board, setBoard] = useState(initialBoard);

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

  function restart() {
    setBoard(initialBoard);
    setCurrentPlayer(lastPlayer);
  }

  function isSquashed() {
    return board.every((cell) => cell !== null) && !isThereAWinner();
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

  const replayGame = () => (
    <div>
      <h2>Replay game</h2>
      <button onClick={() => restart()}>Replay</button>
    </div>
  );

  return (
    <>
      <div className={cx("title")}>TicTacToe Mania </div>
      {isThereAWinner() && (
        <div>
          <div>Player {lastPlayer} won</div>
          {replayGame()}
        </div>
      )}

      {isSquashed() && (
        <div>
          <div>It's a tie!</div>
          {replayGame()}
        </div>
      )}

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
