import { useState } from "react";
import "./ColorSelector.css";
import ColorSelectorCard from "./ColorSelectorCard";

const colors = [
  "red",
  "green",
  "yellow",
  "orange",
  "light-blue",
  "pink",
  "purple",
  "blue",
];

/**
 * @param {Object} props
 * @param {any[]=} props.players
 * @param {(string) => void} props.onChange
 * @return {*}
 */
export default function ColorSelector({ players, onChange }) {
  const [possiblePlayers, setPossiblePlayers] = useState(
    colors.map((color) => {
      const player = players?.find((player) => player.color === color);
      return {
        color,
        name: player?.name || "",
      };
    })
  );

  const handleNameChange = (color, name) => {
    const newPlayers = possiblePlayers.map((player) => {
      if (player.color === color) {
        return {
          ...player,
          name,
        };
      }
      return player;
    });
    setPossiblePlayers(newPlayers);
    onChange(newPlayers.filter((player) => player.name));
  };

  return (
    <div className="color-selector">
      {possiblePlayers.map((player) => (
        <ColorSelectorCard
          name={player.name}
          key={player.color}
          color={player.color}
          onChange={(name) => handleNameChange(player.color, name)}
        />
      ))}
    </div>
  );
}
