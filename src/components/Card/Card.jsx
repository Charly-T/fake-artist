import { useRef } from "react";
import "./Card.css";

/**
 * @param {object} props
 * @param {string} props.color
 * @param {boolean=} props.flipped
 * @param {React.ReactNode=} props.front
 * @param {React.ReactNode=} props.back
 * @param {() => void=} props.onClick
 * @param {() => void=} props.onTouchStart
 * @param {() => void=} props.onTouchEnd
 * @return {JSX.Element}
 */
export default function Card({
  color,
  flipped,
  front,
  back,
  onClick,
  onTouchStart,
  onTouchEnd,
}) {
  const cardRef = useRef(null);
  const cssClasses = ["card"];

  if (flipped) {
    cssClasses.push("flipped");
  }

  const handleStart = () => {
    const handleEnd = () => {
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mouseup", onTouchEnd);
      if (onTouchEnd) {
        onTouchEnd();
      }
    };
    window.addEventListener("touchend", handleEnd);
    window.addEventListener("mouseup", handleEnd);
    if (onTouchStart) {
      onTouchStart();
    }
  };

  return (
    <div
      className={cssClasses.join(" ")}
      ref={cardRef}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
      onClick={onClick}
      style={{
        // @ts-ignore
        "--card-color": `var(--${color}-hue)`,
      }}
    >
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
}
