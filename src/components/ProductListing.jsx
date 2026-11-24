import { ProductCard } from "./ProductCard";

export function ProductListing({ products = [] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(292px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((product, index) => (
        <ProductCard
          key={`${product.name}-${index}`}
          image={product.image}
          imagem={product.imagem}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}