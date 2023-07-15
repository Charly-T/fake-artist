import { useState } from "react";
import "./ColorSelectorCard.css";
import Card from "../Card/Card";

export default function ColorSelectorCard({ name, color, onChange }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
  };

  const handleRef = (input) => {
    if (!input) {
      return;
    }
    if (selected) {
      input.focus();
    } else {
      input.blur();
    }
  };

  return (
    <Card
      color={color}
      flipped={selected || !!name}
      onClick={handleClick}
      back={
        <input
          ref={handleRef}
          className="color-selector-card-input"
          onBlur={() => {
            setSelected(false);
          }}
          value={name}
          onChange={(e) => {
            const newName = e.target.value;
            onChange(newName);
          }}
        />
      }
    />
  );
}
