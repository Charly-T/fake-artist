import ColorSelector from "../ColorSelector/ColorSelector";
import "./PlayerList.css";

/**
 * @param {Object} props
 * @param {any[]=} props.players
 * @param {() => void} props.startGame
 * @param {number} props.minPlayers
 * @param {(players: any[]) => void} props.updatePlayers
 * @return {JSX.Element}
 */
export default function PlayerList({
  players,
  startGame,
  minPlayers,
  updatePlayers,
}) {
  const handleColorChange = (newPlayers) => {
    updatePlayers(newPlayers);
  };

  const handleStartGame = () => {
    startGame();
  };

  return (
    <>
      <ColorSelector players={players} onChange={handleColorChange} />

      <div>
        <button
          disabled={players?.length < minPlayers}
          onClick={handleStartGame}
        >
          Start game
        </button>
      </div>
    </>
  );
}
