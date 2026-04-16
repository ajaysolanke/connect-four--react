import { GAME_STATUS } from "../App"
import classes from "./Game.module.css";
import Disc from "./Disc";
import useBoard from "../hooks/useGame";
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
    dropRow,
    dropCol,
    dropStatus,
  } = useBoard();

  // if(gameStatus===GAME_STATUS.IDLE) return (<StartGame startGame={startGame} />);

  return (
    <div>
      <GameStatus gameStatus={gameStatus} player={player} winner={winner} startGame={startGame}/>
      { gameStatus!==GAME_STATUS.IDLE &&
      <div className={classes['board-container']}>
        <div className=""></div>
        <DropDisc gameStatus={gameStatus} player={player} dropRow={dropRow} dropCol={dropCol} dropStatus={dropStatus} />
        <div className={`${classes["board"]} ${gameStatus!==GAME_STATUS.RUNNING ? classes['disabled'] : ''}`}>
          {board.map((t, i) => (
            <Disc
              key={i}
              t={t}
              handleClick={() => handleClick(i)}
              handleMouseEnter={() => handleMouseEnter(i)}
              disabled={gameStatus!==GAME_STATUS.RUNNING}
            />
          ))}
        </div>
      </div>
      }
      <br/>
      <GameOptions gameStatus={gameStatus} resetGame={resetGame} />
    </div>
  );
}
