import styled from "styled-components"
import { GAME_STATUS } from "../App"
import Button from "./Button";

function playerName(player:string) {
    return player==='p1'?'Player 1' : player==='p2' ? 'Player 2' : '';
}

const PlayerIndicator = styled.div<{ $player: string; }>`
    width: 16px;
    height: 16px;
    border-radius:50%;
    background-color: ${ props => props.$player==='p1'?'red':props.$player==='p2'?'yellow':'transparent'}
`;
interface GameStatusProps {
    gameStatus: GAME_STATUS,
    player: string,
    winner: string,
    startGame: ()=>void,
}
export default function GameStatus({gameStatus,player,winner,startGame}:GameStatusProps){
    if(gameStatus===GAME_STATUS.IDLE)
    return (
        <div>
            <p>Connect Four is a 2 player game.
                Each player is assigned tokens of a color(red or yellow).
                They can play in turns. There is a grid/board with 7 columns and 6 rows.
                A player can only add their colored token in a column at the bottom-most free slot.
                Whichever player first places 4 of their tokens consecutively in a horizontal, vertical, diagonal fashion, wins. 
            </p>
            <br/>
            <Button onClick={startGame}>Start Game</Button>
        </div>
    )

    if(gameStatus===GAME_STATUS.END_WIN)
        return (
            <div>
                {/* <h3>{playerName(winner)} Won</h3> */}
                <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', gap: '8px' }}>
                    <PlayerIndicator $player={winner} />
                    <h3> {playerName(winner)} Won</h3>
                </div>
                <br/>
                <Button onClick={startGame}>New Game</Button>
            </div>
        )
    if(gameStatus===GAME_STATUS.END_DRAW)
        return (
            <div>
                <h3>Game Draw</h3>
                <br/>
                <Button onClick={startGame}>New Game</Button>
            </div>
        )
    
    if(gameStatus===GAME_STATUS.RUNNING)
        return (
            <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', gap: '8px' }}>
                <PlayerIndicator $player={player} />
                <h3> {playerName(player)}'s Turn</h3>
            </div>
        )
}