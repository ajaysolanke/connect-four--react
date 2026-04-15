import './App.css'
import Game from './components/Game';

export enum GAME_STATUS {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  END_WIN = 'END_WIN',
  END_DRAW = 'END_DRAW'
}

function App() {

  return (
    <main>
      <h1>Connect Four</h1>
      <Game />
    </main>
  )
}

export default App
