export function FilterGroup({
  title,
  inputType = "checkbox",
  options = [],
  selectedValues = [],
  onChange,
}) {
  const handleOptionChange = (optionValue, checked) => {
    if (!onChange) return;

    if (inputType === "radio") {
      onChange([optionValue]);
      return;
    }

    if (checked) {
      onChange([...selectedValues, optionValue]);
    } else {
      onChange(selectedValues.filter((item) => item !== optionValue));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {title && (
        <h3
          style={{
            margin: 0,
            fontSize: "14px",
            color: "var(--dark-gray-2, #474747)",
          }}
        >
          {title}
        </h3>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map((option, index) => {
          const optionValue = option.value ?? option.text;
          const isChecked = selectedValues.includes(optionValue);

          return (
            <label
              key={`${optionValue}-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                fontSize: "14px",
                color: "var(--dark-gray-2, #474747)",
              }}
            >
              <input
                type={inputType}
                name={inputType === "radio" ? title || "filter-group" : undefined}
                value={optionValue}
                checked={isChecked}
                onChange={(e) =>
                  handleOptionChange(optionValue, e.target.checked)
                }
                style={{
                  width: "22px",
                  height: "22px",
                  margin: 0,
                  accentColor: "var(--primary, #C92071)",
                  cursor: "pointer",
                }}
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}