import { GAME_STATUS } from "../App"
import Button from "./Button";


interface GameOptionsProps {
    gameStatus: GAME_STATUS,
    resetGame: ()=>void,
}
export default function GameOptions({gameStatus,resetGame}:GameOptionsProps){
    if(gameStatus===GAME_STATUS.RUNNING)
        return (
            <div><Button onClick={resetGame}>Reset Game</Button>
        </div>
        )
    return null;
}