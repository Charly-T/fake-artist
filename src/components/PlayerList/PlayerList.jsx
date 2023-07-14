import { useState } from "react";
import ColorSelector from "../ColorSelector/ColorSelector";
import "./PlayerList.css";
import Card from "../Card/Card";

/**
 * @param {Object} props
 * @param {Player[]} props.players
 * @param {(player: Player) => void} props.addPlayer
 * @param {(name: string) => void} props.removePlayer
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

      <div>
        <button disabled={!name || !color} onClick={handleAddPlayer}>
          Add
        </button>
        <button
          disabled={players.length < minPlayers}
          onClick={handleStartGame}
        >
          Start game
        </button>
      </div>
      <div className="player-list">
        {players.map((player) => (
          <Card
            color={player.color}
            front={player.name}
            onClick={() => handleRemovePlayer(player.name)}
            key={player.color}
          />
        ))}
      </div>
    </>
  );
}
