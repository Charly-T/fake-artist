import Card from "../Card/Card";
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
        <Card
          key={color}
          color={color}
          flipped={color === selectedColor}
          onClick={() => {
            onChange(color);
          }}
        />
      ))}
    </div>
  );
}
