import { GAME_STATUS } from "../App"
// import { styled } from "styled-components";
import classes from "./Game.module.css";
import Disc from "./Disc";
import useBoard from "../hooks/useGame";
import StartGame from "./GameStatus";
import DropDisc from "./DropDisc";
import GameStatus from "./GameStatus";
import GameOptions from "./GameOptions";

export default function Game(){
  const {
    board,
    player,
    gameStatus,
    winner,
    startGame,
    resetGame,
    handleClick,
    handleMouseEnter,
    playerToColor,
    dropRow,
    dropCol,
    dropStatus,
  } = useBoard();

  // if(gameStatus===GAME_STATUS.IDLE) return (<StartGame startGame={startGame} />);

  return (
    <div>

      {/* <p>
        Player: {player} [{playerToColor[player]}]
      </p>
      <p>Game Status: {gameStatus}</p>
      <p>Winner: {winner}</p> */}
      <GameStatus gameStatus={gameStatus} player={player} winner={winner} startGame={startGame}/>
      { gameStatus!==GAME_STATUS.IDLE &&
      <div>
        <DropDisc gameStatus={gameStatus} player={player} dropRow={dropRow} dropCol={dropCol} dropStatus={dropStatus} />
        {/* <div className={classes["drop-container"]}>
          {gameStatus === GAME_STATUS.RUNNING &&
            dropRow >= -1 &&
            dropCol >= 0 &&
            dropStatus !== "COMPLETE" && (
              <DropDisc
                // key={i}
                className={`${classes.tile} ${
                  player === "p1"
                    ? classes["tile-a"]
                    : player === "p2"
                    ? classes["tile-b"]
                    : ""
                }`}
                $top={dropStatus === "IDLE" ? 0 : (dropRow + 1) * 54 + 4}
                $left={dropCol * 54}
              />
            )}
        </div> */}
        <div className={classes["board"]}>
          {board.map((t, i) => (
            <Disc
              key={i}
              t={t}
              i={i}
              handleClick={() => handleClick(i)}
              handleMouseEnter={() => handleMouseEnter(i)}
            />
          ))}
        </div>
      </div>
      }
      <GameOptions gameStatus={gameStatus} resetGame={resetGame} />
    </div>
  );
}
