import { Gallery } from "../components/Gallery";
import { Section } from "../components/Section";
import { ProductListing } from "../components/ProductListing";

function HomePage() {
  const slideImages = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
  ];

  const collections = [
    { src: "/collection-1.png", alt: "Coleção 1" },
    { src: "/collection-2.png", alt: "Coleção 2" },
    { src: "/collection-3.png", alt: "Coleção 3" },
  ];

  const highProducts = [
    {
      name: "Nome do produto 1",
      image: "/product-thumb-1.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "/product-thumb-2.png",
      price: 49.9,
    },
    {
      name: "Nome do produto 3",
      image: "/product-thumb-3.png",
      price: 120,
      priceDiscount: 99.9,
    },
    {
      name: "Nome do produto 4",
      image: "/product-thumb-4.png",
      price: 180,
    },
    {
      name: "Nome do produto 5",
      image: "/product-thumb-5.png",
      price: 250,
      priceDiscount: 199.9,
    },
    {
      name: "Nome do produto 6",
      image: "/product-thumb-6.png",
      price: 89.9,
    },
    {
      name: "Nome do produto 7",
      image: "/product-thumb-7.png",
      price: 159.9,
      priceDiscount: 129.9,
    },
    {
      name: "Nome do produto 8",
      image: "/product-thumb-8.png",
      price: 79.9,
    },
  ];

  return (
    <>
      <Gallery
        images={slideImages}
        width="1440px"
        height="681px"
      />

      <Section
        title="Coleções em destaque"
        titleAlign="center"
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
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

      <Section
        title="Produtos em alta"
        titleAlign="left"
      >
        <ProductListing products={highProducts} />
      </Section>
    </>
  );
}

export default HomePage;