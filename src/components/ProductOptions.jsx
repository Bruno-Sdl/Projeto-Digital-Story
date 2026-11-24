import { useState } from "react";

export function ProductOptions({
  options = [],
  radius = "4px",
  shape = "square",
  type = "text",
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isCircle = shape === "circle";
  const isColor = type === "color";

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;

        const style = {
          width: isCircle ? "31px" : "auto",
          minWidth: isCircle ? "31px" : "46px",
          height: isCircle ? "31px" : "46px",
          padding: isCircle ? "0" : "0 12px",
          borderRadius: isCircle ? "50%" : radius,
          border: isSelected
            ? "2px solid var(--primary, #C92071)"
            : "1px solid var(--light-gray-2, #CCCCCC)",
          backgroundColor: isColor ? option : "transparent",
          color: "var(--dark-gray-2, #474747)",
          fontSize: isColor ? "0px" : "24px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        };

        return (
          <button
            key={`${option}-${index}`}
            type="button"
            style={style}
            onClick={() => setSelectedIndex(index)}
            aria-pressed={isSelected}
          >
            {!isColor ? option : null}
          </button>
        );
      })}
    </div>
  );
}