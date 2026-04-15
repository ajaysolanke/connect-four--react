import { styled } from "styled-components";
import classes from "./Game.module.css";

export default function Disc({
  t,
  i,
  handleClick,
  handleMouseEnter,
}: {
  t:string,
  i:number,
  handleClick:()=>void,
  handleMouseEnter:()=>void}) {
  return (
    <button
      className={`${classes.tile} ${
        t === "p1" ? classes["tile-a"] : t === "p2" ? classes["tile-b"] : ""
      }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    ></button>
  );
}
