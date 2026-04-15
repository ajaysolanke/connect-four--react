import styled from "styled-components"
import { GAME_STATUS } from "../App"


interface GameOptionsProps {
    gameStatus: GAME_STATUS,
    resetGame: ()=>void,
}
export default function GameOptions({gameStatus,resetGame}:GameOptionsProps){
    if(gameStatus===GAME_STATUS.RUNNING)
        return (
            <div><button onClick={resetGame}>Reset Game</button>
        </div>
        )
    return null;
}