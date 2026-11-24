export function Section({
  title,
  titleAlign = "left",
  link,
  children,
}) {
  return (
    <section style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {title && (
          <h2
            style={{
              margin: 0,
              width: "100%",
              textAlign: titleAlign,
              fontSize: "24px",
              color: "var(--dark-gray-2, #474747)",
            }}
          >
            {title}
          </h2>
        )}

        {link?.href && link?.text && (
          <a
            href={link.href}
            style={{
              whiteSpace: "nowrap",
              marginLeft: "16px",
              fontSize: "18px",
              color: "var(--primary, #C92071)",
              textDecoration: "none",
            }}
          >
            {link.text}
          </a>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}