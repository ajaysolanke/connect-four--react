import { useEffect, useState } from "react";
import { GAME_STATUS } from "../App";

const nRows = 6;
const nCols = 7;
const initBoardState = new Array(nRows * nCols).fill(" ");
const initColTop = new Array(nCols)
  .fill(0)
  .map((_, i) => nCols * (nRows - 1) + i);
const playerToColor = {
  p1: "red",
  p2: "yellow",
};
const X = 4;
const TRANSITION_DURATION = 500;


export default function useBoard() {
  const [board, setBoard] = useState(initBoardState);
  const [colTop, setColTop] = useState(initColTop);
  const [player, setPlayer] = useState("p1");
  const [lastMove, setLastMove] = useState<number|null>(null);
  const [gameStatus, setGameStatus] = useState<GAME_STATUS>(GAME_STATUS.IDLE);
  const [winner, setWinner] = useState("");
  const [dropCol, setDropCol] = useState(-1);
  const [dropRow, setDropRow] = useState(-1);

  const [dropStatus, setDropStatus] = useState("IDLE");

  const startGame = () => {
    setBoard(initBoardState);
    setColTop(initColTop);
    setPlayer('p1');
    setLastMove(null);
    setWinner('');
    setDropRow(-1);
    setDropCol(-1);
    setGameStatus(GAME_STATUS.RUNNING)
  }
  const resetGame = () => {
    if(gameStatus===GAME_STATUS.RUNNING) {
      setBoard(initBoardState);
      setColTop(initColTop);
      setPlayer('p1');
      setLastMove(null);
      setWinner('');
      setDropRow(-1);
      setDropCol(-1);
    }
  }
  // const endGame = () => {
  //   setGameStatus(GAME_STATUS.IDLE)
  // }
  useEffect(() => {
    console.log("dropRow,dropCol", dropRow, dropCol);
  }, [dropRow, dropCol]);
  const handleClick = (i:number) => {
    if (gameStatus !== GAME_STATUS.RUNNING || dropStatus !== "IDLE") return;
    // setDropInProgress(true);
    setDropStatus("IN-PROGRESS");
    console.log('$TOP',(dropRow + 1) * 54 + 4, '$LEFT', dropCol * 54);
    // $top={dropStatus === "IDLE" ? 0 : (dropRow + 1) * 54 + 4}
    //             $left={dropCol * 54}
    setTimeout(() => {
      // setDropInProgress(false);
      setDropStatus("COMPLETE");
    }, TRANSITION_DURATION);
    // get column
    console.log("i", i);
    const col = i % nCols;
    const j = colTop[col];
    const _colTop = [...colTop];
    _colTop[col] -= nCols;
    setColTop(_colTop);
    console.log("j", j);

    if (j >= 0) {
      setTimeout(()=>{
      const _board = [...board];
      _board[j] = player;
      setBoard(_board);
      setLastMove(j);
      setDropRow(-1)
      setDropCol(-1)
      }, TRANSITION_DURATION);
    }
  };

  const handleMouseEnter = (i:number) => {
    if (gameStatus === GAME_STATUS.RUNNING && dropStatus === "IDLE") {
      const col = i % nCols;
      const row = Math.floor(colTop[col]/nCols);
      setDropCol(col);
      setDropRow(row);
    }
  };

  const getCol = (i:number) => {
    const c = i % nCols;
    const icol = [];
    for (let j = c; j < nRows * nCols; j += nCols) icol.push(board[j]);
    return icol.join("");
  };

  const getRow = (i:number) => {
    const r = Math.floor(i / nCols);
    const irow = board.slice(r * nCols, (r + 1) * nCols);
    // for (const j = r; j < r+nCols; j++) icol.push(board[j]);
    return irow.join("");
  };
  // const getDiag1 = (i:number) => {
  //   const r = Math.floor(i / nCols);
  //   const irow = board.slice(r * nCols, (r + 1) * nCols);
  //   // for (const j = r; j < r+nCols; j++) icol.push(board[j]);
  //   return irow.join("");
  // };
  useEffect(() => {
    if (lastMove) {
      const winComb = new Array(X).fill(player).join("");
      let win = false;
      console.log("wincomb", winComb);
      // get column of last move and check for win
      const col = getCol(lastMove);
      console.log("col", col);
      win = col.indexOf(winComb) !== -1 ? true : false;
      console.log(col.indexOf(winComb));
      if (!win) {
        // get row of lastmove and check fro win
        const row = getRow(lastMove);
        console.log("row", row);
        win = row.indexOf(winComb) !== -1 ? true : false;
        console.log(row.indexOf(winComb));
      }
      const emptySlots = board.filter((t) => t === " ").length;

      if (win) {
        setGameStatus(GAME_STATUS.END_WIN);
        setWinner(player);
      } else if (emptySlots === 0) {
        setGameStatus(GAME_STATUS.END_DRAW);
      } else {
        // setPlayer((p) => (p === "p1" ? "p2" : p === "p2" ? "p1" : ""));
      }
    }
  }, [lastMove, board]);

  useEffect(() => {
    if (dropStatus === "COMPLETE") {
      
      setPlayer((p) => (p === "p1" ? "p2" : p === "p2" ? "p1" : ""));

      setTimeout(() => {
        setDropStatus("IDLE");
      }, TRANSITION_DURATION);
    }
  }, [dropStatus]);

  return {
    board,
    player,
    gameStatus,
    winner,
    startGame,
    resetGame,
    handleClick,
    handleMouseEnter,
    playerToColor,
    dropCol,
    dropRow,
    dropStatus,
  };
}
