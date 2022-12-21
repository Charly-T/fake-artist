import { useRef } from "react";
import "./PlayerCard.css";

/**
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.color
 * @param {String} props.word
 * @param {Boolean=} props.small
 * @param {Boolean=} props.flipped
 * @param {() => void=} props.onClick
 * @return {JSX.Element}
 */
export default function PlayerCard({
  name,
  color,
  word,
  small,
  flipped,
  onClick,
}) {
  const cardRef = useRef(null);

  const flipCard = () => {
    if (onClick) {
      return onClick();
    }
    if (flipped) {
      return;
    }

    cardRef.current.classList.toggle("flipped");
    if (cardRef.current.classList.contains("flipped")) {
      setTimeout(() => {
        cardRef.current.classList.remove("flipped");
      }, 1000);
    }
  };

  return (
    <div
      className={`player-card ${small ? "small" : ""} ${
        flipped ? "flipped" : ""
      }`}
      ref={cardRef}
      style={{
        // @ts-ignore
        "--card-color": `var(--${color}-hue)`,
      }}
      onClick={flipCard}
    >
      <div className="front">
        <p className="name">{name}</p>
      </div>
      <div className="back">
        <p>{word}</p>
      </div>
    </div>
  );
}
