export function ProductCard({ image, imagem, name, price, priceDiscount }) {
  const imgSrc = image || imagem || "";
  const hasDiscount =
    priceDiscount !== undefined && priceDiscount !== null && priceDiscount !== "";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <img
        src={imgSrc}
        alt={name || "Produto"}
        style={{
          width: "292px",
          height: "321px",
          objectFit: "cover",
          backgroundColor: "#F5F5F5",
        }}
      />

      {name && (
        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            color: "var(--dark-gray-2, #474747)",
          }}
        >
          {name}
        </h3>
      )}

      <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
        {hasDiscount ? (
          <>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "var(--dark-gray, #1F1F1F)",
              }}
            >
              {priceDiscount}
            </span>
            <span
              style={{
                fontSize: "24px",
                color: "var(--light-gray, #8F8F8F)",
                textDecoration: "line-through",
              }}
            >
              {price}
            </span>
          </>
        ) : (
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "var(--dark-gray, #1F1F1F)",
            }}
          >
            {price}
          </span>
        )}
      </div>
    </div>
  );
}