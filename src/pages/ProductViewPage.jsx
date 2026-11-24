import { Layout } from "../components/Layout";
import { Gallery } from "../components/Gallery";
import { BuyBox } from "../components/BuyBox";
import { ProductOptions } from "../components/ProductOptions";
import { Section } from "../components/Section";
import { ProductListing } from "../components/ProductListing";

export function ProductViewPage() {
  const productImages = [
    { src: "/product-image-1.png" },
    { src: "/product-image-2.png" },
  ];

  const recommendedProducts = [
    {
      name: "Nome do produto 1",
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='220'><rect width='100%25' height='100%25' fill='%23E2E3E5'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23474747' font-family='sans-serif' font-size='18'>Produto 1</text></svg>",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='220'><rect width='100%25' height='100%25' fill='%23E2E3E5'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23474747' font-family='sans-serif' font-size='18'>Produto 2</text></svg>",
      price: 49.9,
    },
  ];

  return (
    <Layout>
      <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
        <Gallery
          images={productImages}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />

        <BuyBox
          name="Tênis Nike Revolution 6 Next Nature Masculino"
          reference="REF: 38416711"
          stars="4.7"
          rating="(90 avaliações)"
          price={219.0}
          priceDiscount={219.0}
          description="Descrição do produto conforme especificação do projeto."
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <ProductOptions
              options={["39", "40", "41", "42"]}
              radius="4px"
              shape="square"
              type="text"
            />
            <ProductOptions
              options={["#6FEEB6", "#FF6969", "#5E5E5E", "#6D70B7"]}
              shape="circle"
              type="color"
            />
          </div>
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{
          text: "Ver todos",
          href: "/products",
        }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </Layout>
  );
}