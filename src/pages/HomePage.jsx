import { Layout } from "../components/Layout";
import { Gallery } from "../components/Gallery";
import { Section } from "../components/Section";
import { ProductListing } from "../components/ProductListing";

export function HomePage() {
  const slideImages = [
    { src: "public/home-slide-1.jpeg" },
    { src: "public/home-slide-2.jpeg" },
  ];

  const collections = [
    { src: "public/collection-1.png", alt: "Coleção 1" },
    { src: "public/collection-2.png", alt: "Coleção 2" },
    { src: "public/collection-3.png", alt: "Coleção 3" },
  ];

  const highProducts = [
    {
      name: "Nome do produto 1",
      image: "public/product-thumb-1.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "public/product-thumb-2.png",
      price: 49.9,
    },
    {
      name: "Nome do produto 3",
      image: "public/product-thumb-3.png",
      price: 120,
      priceDiscount: 99.9,
    },
    {
      name: "Nome do produto 4",
      image: "public/product-thumb-4.png",
      price: 180,
    },
    {
      name: "Nome do produto 5",
      image: "public/product-thumb-5.png",
      price: 250,
      priceDiscount: 199.9,
    },
    {
      name: "Nome do produto 6",
      image: "public/product-thumb-6.png",
      price: 89.9,
    },
    {
      name: "Nome do produto 7",
      image: "public/product-thumb-7.png",
      price: 159.9,
      priceDiscount: 129.9,
    },
    {
      name: "Nome do produto 8",
      image: "public/product-thumb-8.png",
      price: 79.9,
    },
  ];

  return (
    <Layout>
      <Gallery images={slideImages} width="1440px" height="681px" />

      <Section title="Coleções em destaque" titleAlign="center">
        <div style={{ display: "flex", gap: "16px" }}>
          {collections.map((collection, index) => (
            <img
              key={`${collection.src}-${index}`}
              src={collection.src}
              alt={collection.alt}
              style={{
                width: "100%",
                borderRadius: "4px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={highProducts} />
      </Section>
    </Layout>
  );
}