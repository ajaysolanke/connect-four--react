import { useState } from 'react'
import './App.css'
import StartGame from './components/GameStatus';
import Game from './components/Game';

export enum GAME_STATUS {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  END_WIN = 'END_WIN',
  END_DRAW = 'END_DRAW'
}

function App() {
  // const [gameStatus, setGameStatus] = useState<GAME_STATUS>(GAME_STATUS.IDLE); // IN_PROGRESS, ENDED-WIN, ENDED-DRAW

  // const startGame = () => {
  //   setGameStatus(GAME_STATUS.RUNNING)
  // }
  // const endGame = () => {
  //   setGameStatus(GAME_STATUS.IDLE)
  // }
  return (
    <main>
      <h1>Connect Four</h1>
      {/* <StartGame gameStatus={gameStatus} startGame={startGame} /> */}
      <Game />
    </main>
  )
}

export default App
