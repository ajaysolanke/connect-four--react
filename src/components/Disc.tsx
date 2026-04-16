import classes from "./Game.module.css";

export default function Disc({
  t,
  handleClick,
  handleMouseEnter,
  disabled
}: {
  t:string,
  disabled:boolean,
  handleClick:()=>void,
  handleMouseEnter:()=>void}) {
  return (
    <button
      className={`${classes.tile} ${
        t === "p1" ? classes["tile-a"] : t === "p2" ? classes["tile-b"] : ""
      }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
    ></button>
  );
}
