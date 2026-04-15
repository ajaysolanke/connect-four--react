import classes from './Game.module.css';
import { GAME_STATUS } from "../App"
import styled from 'styled-components';

interface DropDiscProps {
  gameStatus: GAME_STATUS,
  dropRow: number,
  dropCol: number,
  dropStatus: string,
  player: string
}

const DropDiscBase = styled.div<{ $top?: number; $left?: number; $player?: string; }>`
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  top: ${(props) => (props.$top ? props.$top + "px" : "0px")};
  left: ${(props) => props.$left + "px"};
  background-color: ${ props=> (props.$player==='p1'? 'red' : props.$player==='p2' ? 'yellow': 'grey')};
  transition: top 500ms ease-in-out;
`;
export default function DropDisc({gameStatus, player, dropRow, dropCol, dropStatus}:DropDiscProps){
    return (
        <div className={classes["drop-container"]}>
          {gameStatus === GAME_STATUS.RUNNING &&
            dropRow >= -1 &&
            dropCol >= 0 &&
            dropStatus !== "COMPLETE" && (
              <DropDiscBase
                className={`${classes.tile}`}
                $top={dropStatus === "IDLE" ? 0 : (dropRow + 1) * 54 + 4}
                $left={dropCol * 54}
                $player={player}
              />
            )}
        </div>
    )
}