import { useState } from "react";
import Card from "../Card/Card";
import "./Round.css";

/**
 * @param {Object} props
 * @param {Round} props.round
 * @param {() => void} props.nextRound
 * @return {JSX.Element}
 */
export default function Round({ round, nextRound }) {
  const [visible, setVisible] = useState(null);

  return (
    <div className="Round">
      <h4>
        Round {round.roundNumber} -{" "}
        {round.category.charAt(0).toUpperCase() + round.category.substring(1)}
      </h4>
      <div className="players">
        {round.roundPlayers.map((roundPlayer) => (
          <Card
            key={roundPlayer.player.color}
            color={roundPlayer.player.color}
            front={roundPlayer.player.name}
            back={roundPlayer.word}
            flipped={visible === roundPlayer.player.color}
            onTouchStart={() => {
              setVisible(roundPlayer.player.color);
            }}
            onTouchEnd={() => {
              setVisible(null);
            }}
          />
        ))}
      </div>
      <button onClick={nextRound}>Next round</button>
    </div>
  );
}
