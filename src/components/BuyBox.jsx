import starIcon from "../assets/star-icon.svg";

export function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h1
        style={{
          margin: 0,
          fontSize: "32px",
          color: "var(--dark-gray, #1F1F1F)",
        }}
      >
        {name}
      </h1>

      {reference && (
        <span
          style={{
            fontSize: "12px",
            color: "var(--dark-gray-3, #666666)",
          }}
        >
          {reference}
        </span>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "4px",
            backgroundColor: "var(--warning, #F6AA1C)",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <span>{stars}</span>
          <img
            src={starIcon}
            alt="Estrela"
            style={{
              width: "14px",
              height: "14px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </span>

        {rating && (
          <span
            style={{
              fontSize: "14px",
              color: "var(--light-gray, #8F8F8F)",
            }}
          >
            {rating}
          </span>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
        {hasDiscount ? (
          <>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "var(--dark-gray-2, #474747)",
              }}
            >
              {priceDiscount}
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "var(--light-gray-2, #CCCCCC)",
                textDecoration: "line-through",
              }}
            >
              {price}
            </span>
          </>
        ) : (
          <span
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "var(--dark-gray-2, #474747)",
            }}
          >
            {price}
          </span>
        )}
      </div>

      {description && (
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "var(--dark-gray-2, #474747)",
          }}
        >
          {description}
        </p>
      )}

      {children && <div>{children}</div>}

      <button
        type="button"
        style={{
          marginTop: "8px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "var(--warning, #F6AA1C)",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        COMPRAR
      </button>
    </div>
  );
}