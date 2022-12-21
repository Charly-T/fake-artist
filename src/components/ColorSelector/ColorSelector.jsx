import PlayerCard from "../PlayerCard/PlayerCard";
import "./ColorSelector.css";

/**
 * @param {Object} props
 * @param {string[]} props.usedColors
 * @param {string} props.selectedColor
 * @param {(string) => void} props.onChange
 * @return {*}
 */
export default function ColorSelector({ usedColors, selectedColor, onChange }) {
  const availableColors = [
    "red",
    "green",
    "yellow",
    "orange",
    "light-blue",
    "pink",
    "purple",
    "blue",
  ].filter((color) => !usedColors.includes(color));

  return (
    <div className="color-selector">
      {availableColors.map((color) => (
        <PlayerCard
          word={""}
          name={""}
          color={color}
          small
          flipped={color === selectedColor}
          key={color}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
}
