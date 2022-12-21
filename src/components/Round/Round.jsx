import PlayerCard from "../PlayerCard/PlayerCard";
import "./Round.css";

/**
 * @param {Object} props
 * @param {Round} props.round
 * @param {() => void} props.nextRound
 * @return {JSX.Element}
 */
export default function Round({ round, nextRound }) {
  return (
    <div className="Game">
      <h4>
        Round {round.roundNumber} -{" "}
        {round.category.charAt(0).toUpperCase() + round.category.substring(1)}
      </h4>
      <div className="players">
        {round.roundPlayers.map((roundPlayer) => (
          <PlayerCard
            key={roundPlayer.player.color}
            name={roundPlayer.player.name}
            color={roundPlayer.player.color}
            word={roundPlayer.word}
          />
        ))}
      </div>
      <button onClick={nextRound}>Next round</button>
    </div>
  );
}
