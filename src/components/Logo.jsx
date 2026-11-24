import logoImg from "../assets/logo.svg";

export function Logo({ variant = "default" }) {
  return (
    <img
      src={logoImg}
      alt="Logo da aplicação"
      style={{
        width: "253px",
        height: "44px",
        objectFit: "contain",
        filter: variant === "white" ? "brightness(0) invert(1)" : "none",
      }}
    />
  );
}

