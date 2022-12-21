import { useState } from "react";
import ColorSelector from "../ColorSelector/ColorSelector";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./PlayerList.css";

/**
 * @param {Object} props
 * @param {Player[]} props.players
 * @param {(player: Player) => void} props.addPlayer
 * @param {(string) => void} props.removePlayer
 * @param {() => void} props.startGame
 * @param {number} props.minPlayers
 * @return {JSX.Element}
 */
export default function PlayerList({
  players,
  addPlayer,
  removePlayer,
  startGame,
  minPlayers,
}) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleAddPlayer = () => {
    addPlayer({ name, color });
    setName("");
    setColor("");
  };

  const handleStartGame = () => {
    startGame();
  };

  const handleRemovePlayer = (name) => {
    removePlayer(name);
  };

  return (
    <>
      <div className="player-list">
        {players.map((player) => (
          <PlayerCard
            word={""}
            name={player.name}
            color={player.color}
            small
            onClick={() => handleRemovePlayer(player.name)}
            key={player.color}
          />
        ))}
      </div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <ColorSelector
        usedColors={players.map((i) => i.color)}
        selectedColor={color}
        onChange={handleColorChange}
      />

      <button disabled={!name || !color} onClick={handleAddPlayer}>
        Add
      </button>
      <button disabled={players.length < minPlayers} onClick={handleStartGame}>
        Start game
      </button>
    </>
  );
}
