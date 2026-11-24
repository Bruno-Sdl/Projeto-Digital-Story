import { useState } from "react";

function normalizeSize(value, fallback) {
  if (!value) return fallback;
  return /^\d+$/.test(String(value).trim()) ? `${value}px` : value;
}

export function Gallery({
  className = "",
  images = [],
  showThumbs = false,
  width = "700px",
  height = "570px",
  radius = "4px",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const normalizedWidth = normalizeSize(width, "700px");
  const normalizedHeight = normalizeSize(height, "570px");

  const isFirst = activeIndex === 0;
  const isLast = activeIndex >= images.length - 1;

  const handlePrev = () => {
    if (!isFirst) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: normalizedWidth,
      }}
    >
      <div
        style={{
          position: "relative",
          width: normalizedWidth,
          height: normalizedHeight,
          borderRadius: radius,
          overflow: "hidden",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.3s ease",
          }}
        >
          {images.map((item, index) => (
            <img
              key={`${item.src}-${index}`}
              src={item.src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                minWidth: "100%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirst}
          aria-label="Imagem anterior"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            color: "var(--dark-gray-2, #474747)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            fontSize: "20px",
            cursor: isFirst ? "not-allowed" : "pointer",
            opacity: isFirst ? 0.35 : 1,
          }}
        >
          ‹
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={isLast}
          aria-label="Próxima imagem"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            color: "var(--dark-gray-2, #474747)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            fontSize: "20px",
            cursor: isLast ? "not-allowed" : "pointer",
            opacity: isLast ? 0.35 : 1,
          }}
        >
          ›
        </button>
      </div>

      {showThumbs && images.length > 0 && (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {images.map((item, index) => {
            const isSelected = activeIndex === index;
            return (
              <button
                key={`thumb-${item.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                style={{
                  width: "117px",
                  height: "95px",
                  padding: 0,
                  borderRadius: radius,
                  overflow: "hidden",
                  border: isSelected
                    ? "2px solid var(--primary, #C92071)"
                    : "1px solid var(--light-gray-2, #CCCCCC)",
                  cursor: "pointer",
                  backgroundColor: "#F5F5F5",
                }}
              >
                <img
                  src={item.src}
                  alt={`Miniatura ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}